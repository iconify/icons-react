import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv2_vmbmc.css';
import '../../css/d/djk4s6bfq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv2_vmbmc"/><path class="djk4s6bfq"/>`,
		"fallback": "carbon:repo-source-code",
	});
}

export default Component;
