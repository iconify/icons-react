import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c5omvhbxk.css';
import '../../css/v/v9mfvub9v.css';
import '../../css/j/jav2_qgti.css';
import '../../css/h/hbhs4lbyp.css';
import '../../css/j/jwwy0zbhd.css';
import '../../css/i/is550bbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="c5omvhbxk wm-shadow"/><path class="v9mfvub9v"/><path class="jav2_qgti"/><path class="hbhs4lbyp"/><path class="jwwy0zbhd wm-shine"/><path class="is550bbtp wm-deco"/></g>`,
		"fallback": "withicons-sticker:sticky-note",
	});
}

export default Component;
