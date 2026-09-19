import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf_710lax.css';
import '../../css/m/mrndicbcc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf_710lax"/><path class="mrndicbcc"/>`,
		"fallback": "carbon:observed-lightning",
	});
}

export default Component;
