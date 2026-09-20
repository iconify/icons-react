import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el04ihbfv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="el04ihbfv"/>`,
		"fallback": "streamline:moustache-remix",
	});
}

export default Component;
