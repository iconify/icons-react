import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/i/i_pma5d1l.css';
import '../../css/f/f_w74lrnj.css';
import '../../css/c/c2_eabbbq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="i_pma5d1l"/><path class="f_w74lrnj"/><path class="c2_eabbbq"/>`,
		"fallback": "energy-icons:volleyball-20-bold",
	});
}

export default Component;
