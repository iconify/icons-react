import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znqlacbrg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9ceo_bwp.css';
import '../../css/m/macze1bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary znqlacbrg"/><g class="dt0cm9dhy primary"><path class="y9ceo_bwp"/><path class="macze1bzi"/></g>`,
		"fallback": "iconaut:toothbrush-duo",
	});
}

export default Component;
