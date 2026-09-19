import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mmf-20b_f.css';
import '../../css/c/ct5l-hb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mmf-20b_f"/><path class="ct5l-hb4i"/></g>`,
		"fallback": "hugeicons:medicine-02",
	});
}

export default Component;
