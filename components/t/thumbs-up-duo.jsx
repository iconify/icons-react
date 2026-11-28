import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbngglbom.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/atjibysll.css';
import '../../css/h/hbmvtsmai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbngglbom secondary"/><g class="dt0cm9dhy primary"><path class="atjibysll"/><path class="hbmvtsmai"/></g>`,
		"fallback": "iconaut:thumbs-up-duo",
	});
}

export default Component;
