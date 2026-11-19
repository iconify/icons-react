import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i93fv4b0r.css';
import '../../css/x/xj2gq3bwa.css';
import '../../css/u/uilqb5bzk.css';
import '../../css/e/eclqqr0_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i93fv4b0r"/><path class="xj2gq3bwa"/><circle class="uilqb5bzk"/><path class="eclqqr0_t"/></g>`,
		"fallback": "andrsrxn:reload-check",
	});
}

export default Component;
