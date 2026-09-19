import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxfrv-bud.css';
import '../../css/n/nw12yw8jj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxfrv-bud"/><path class="nw12yw8jj"/>`,
		"fallback": "carbon:wave-height",
	});
}

export default Component;
