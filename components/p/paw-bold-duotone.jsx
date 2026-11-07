import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z785bw_il.css';
import '../../css/f/fjd-zv3si.css';
import '../../css/x/x7eqpdbig.css';
import '../../css/m/mcaamkbrc.css';
import '../../css/v/vlrs7zqcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z785bw_il"/><path class="fjd-zv3si"/><path class="x7eqpdbig"/><path class="mcaamkbrc"/><path class="vlrs7zqcn"/>`,
		"fallback": "solar:paw-bold-duotone",
	});
}

export default Component;
