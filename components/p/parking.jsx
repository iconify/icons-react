import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/c/cv6s5pbwf.css';
import '../../css/g/gs8ngvbgq.css';
import '../../css/l/l833663_k.css';
import '../../css/e/ecxk7gbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="cv6s5pbwf"/><path class="gs8ngvbgq"/><path class="l833663_k wm-shine"/><path class="ecxk7gbiv wm-deco"/></g>`,
		"fallback": "withicons-sticker:parking",
	});
}

export default Component;
