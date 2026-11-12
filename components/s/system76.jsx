import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c73n_2bpf.css';
import '../../css/e/eht21_1kr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c73n_2bpf"/><path class="eht21_1kr"/>`,
		"fallback": "selfhst:system76",
	});
}

export default Component;
