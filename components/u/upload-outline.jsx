import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pebxd96xp.css';
import '../../css/d/dfunt2aqf.css';
import '../../css/j/jopaj-b9g.css';
import '../../css/f/f60yx32es.css';
import '../../css/t/t57os687o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="rotate(180 12 5)" class="pebxd96xp"/><rect transform="rotate(90 19 6)" class="dfunt2aqf"/><rect transform="rotate(90 5 6)" class="jopaj-b9g"/><path class="f60yx32es"/><path class="t57os687o"/>`,
		"fallback": "eva:upload-outline",
	});
}

export default Component;
