import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmdpf7x1u.css';
import '../../css/i/i_ynx8bhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmdpf7x1u"/><path class="i_ynx8bhx"/>`,
		"fallback": "energy-icons:notebook-20-bold",
	});
}

export default Component;
