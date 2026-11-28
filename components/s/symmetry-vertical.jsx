import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wssr8ubfg.css';
import '../../css/m/mrx54rbjt.css';
import '../../css/b/bvxuivbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wssr8ubfg"/><path class="mrx54rbjt"/><path class="bvxuivbfy"/></g>`,
		"fallback": "iconaut:symmetry-vertical",
	});
}

export default Component;
