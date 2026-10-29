import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjo6lzbjj.css';
import '../../css/z/zsyqn_b5h.css';
import '../../css/s/s8895pbfj.css';
import '../../css/k/kdq9x8bsz.css';
import '../../css/h/ho11z_3ux.css';
import '../../css/m/mmo8qtb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjo6lzbjj wm-shadow"/><path class="wm-shadow zsyqn_b5h"/><path class="s8895pbfj"/><path class="kdq9x8bsz"/><path class="ho11z_3ux wm-shine"/><path class="mmo8qtb0i"/></g>`,
		"fallback": "withicons-skeuo:minus",
	});
}

export default Component;
