import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atdebeb8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="atdebeb8a"/>`,
		"fallback": "streamline:pork-meat-solid",
	});
}

export default Component;
