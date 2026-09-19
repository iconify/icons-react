import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp8c-eb8i.css';
import '../../css/h/hid2coqpb.css';

const viewBox = {"width":20,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp8c-eb8i"/><path class="hid2coqpb"/>`,
		"fallback": "icomoon-free:price-tags",
	});
}

export default Component;
