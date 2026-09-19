import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtsz_ig2m.css';
import '../../css/c/cgvv3fb_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtsz_ig2m"/><path class="cgvv3fb_p"/>`,
		"fallback": "carbon:research-bloch-sphere",
	});
}

export default Component;
