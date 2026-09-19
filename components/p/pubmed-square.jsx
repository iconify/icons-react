import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv-52pbnq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv-52pbnq"/>`,
		"fallback": "academicons:pubmed-square",
	});
}

export default Component;
