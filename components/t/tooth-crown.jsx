import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yh-wljn8i.css';
import '../../css/h/ha2goljbj.css';
import '../../css/s/s56f-eqng.css';
import '../../css/y/y-nrqgbpl.css';
import '../../css/g/gxtectbxj.css';
import '../../css/k/koy0jjczv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yh-wljn8i"/><path class="ha2goljbj"/><path class="s56f-eqng"/><path class="y-nrqgbpl"/><path class="gxtectbxj"/><path class="koy0jjczv"/></g>`,
		"fallback": "withicons-retro:tooth-crown",
	});
}

export default Component;
