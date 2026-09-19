import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m2to84buo.css';
import '../../css/t/tv_zrj9lf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m2to84buo"/><path class="tv_zrj9lf"/></g>`,
		"fallback": "fad:squareswitch-on",
	});
}

export default Component;
