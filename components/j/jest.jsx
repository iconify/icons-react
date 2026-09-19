import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/k/ke5zifg1a.css';
import '../../css/b/b1feiqias.css';
import '../../css/k/kppkn-rpw.css';
import '../../css/o/o592z9scf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="ke5zifg1a"/><path class="b1feiqias"/><path class="kppkn-rpw"/><path class="o592z9scf"/></g>`,
		"fallback": "catppuccin:jest",
	});
}

export default Component;
