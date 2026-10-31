import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/b/bk-t7ebto.css';
import '../../css/f/f_0k9gqhg.css';
import '../../css/i/iz2oy0b4f.css';
import '../../css/q/qf7wliomw.css';
import '../../css/l/ldkettsrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="bk-t7ebto"/><path class="f_0k9gqhg"/><path class="iz2oy0b4f"/><path class="qf7wliomw"/><path class="ldkettsrg"/></g>`,
		"fallback": "withicons-retro:smile",
	});
}

export default Component;
