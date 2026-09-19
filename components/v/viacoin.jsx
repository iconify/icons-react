import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zda3z-uqc.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zda3z-uqc"/>`,
		"fallback": "fa-brands:viacoin",
	});
}

export default Component;
