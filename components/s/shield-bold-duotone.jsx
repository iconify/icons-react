import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m51pkuzhy.css';
import '../../css/r/rh_uhdcwo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/ho1hk4giy.css';
import '../../css/f/fu9tnywzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m51pkuzhy"/><path class="rh_uhdcwo"/><g class="xtpeb-edw"><path class="ho1hk4giy"/><path class="fu9tnywzi"/></g>`,
		"fallback": "solar:shield-bold-duotone",
	});
}

export default Component;
