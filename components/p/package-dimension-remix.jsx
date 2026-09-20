import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9bygdc2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g9bygdc2c"/>`,
		"fallback": "streamline-flex:package-dimension-remix",
	});
}

export default Component;
