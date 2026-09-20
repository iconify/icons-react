import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-lgg5lrv.css';
import '../../css/f/fbsjnybco.css';
import '../../css/q/q-97-wbjf.css';
import '../../css/m/mk2e5acas.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-lgg5lrv"/><path class="fbsjnybco"/><path class="q-97-wbjf"/><path class="mk2e5acas"/>`,
		"fallback": "openmoji:straight-ruler",
	});
}

export default Component;
