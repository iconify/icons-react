import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jyfz1-buj.css';
import '../../css/k/kgvs3x-sc.css';
import '../../css/y/yq7v54ihk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="jyfz1-buj"/><path class="kgvs3x-sc"/><path class="yq7v54ihk"/></g>`,
		"fallback": "akar-icons:save",
	});
}

export default Component;
