import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntt91gjof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntt91gjof"/>`,
		"fallback": "octicon:paintbrush-24",
	});
}

export default Component;
