import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iw07ocizs.css';
import '../../css/f/fmvl9jb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="iw07ocizs"/><path class="fmvl9jb-y wm-a"/></g>`,
		"fallback": "withicons:refrigerator",
	});
}

export default Component;
