import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yml8kfp1t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yml8kfp1t"/>`,
		"fallback": "streamline-flex:sigma-remix",
	});
}

export default Component;
