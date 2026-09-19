import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghk0ryb3g.css';
import '../../css/f/f-em3h96r.css';
import '../../css/f/fjfsszbfp.css';
import '../../css/i/i050vtjae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghk0ryb3g"/><path class="f-em3h96r"/><path class="fjfsszbfp"/><path class="i050vtjae"/>`,
		"fallback": "ion:ios-construct",
	});
}

export default Component;
