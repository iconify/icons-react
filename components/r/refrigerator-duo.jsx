import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wht_zowdm.css';
import '../../css/f/fmvl9jb-y.css';
import '../../css/i/iw07ocizs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wht_zowdm"/><path class="fmvl9jb-y wm-a"/><path class="iw07ocizs"/></g>`,
		"fallback": "withicons:refrigerator-duo",
	});
}

export default Component;
