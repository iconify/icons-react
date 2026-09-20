import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpueilb4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpueilb4b"/>`,
		"fallback": "rivet-icons:transfer-alt",
	});
}

export default Component;
