import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbrtgmd9d.css';
import '../../css/i/iuvb3zcak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbrtgmd9d"/><path class="iuvb3zcak"/>`,
		"fallback": "carbon:mobile-request",
	});
}

export default Component;
