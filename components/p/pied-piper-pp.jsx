import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hps_kcbsu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hps_kcbsu"/>`,
		"fallback": "fa7-brands:pied-piper-pp",
	});
}

export default Component;
