import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nze_sqbfi.css';
import '../../css/o/okc9y0b0d.css';
import '../../css/n/nm5eogbeu.css';
import '../../css/m/m09y_cbrl.css';
import '../../css/g/go4i0cbvj.css';
import '../../css/l/ldsds5b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nze_sqbfi wm-shadow"/><path class="okc9y0b0d"/><path class="nm5eogbeu"/><path class="m09y_cbrl"/><path class="go4i0cbvj wm-shine"/><path class="ldsds5b_j wm-deco"/></g>`,
		"fallback": "withicons-sticker:italic",
	});
}

export default Component;
