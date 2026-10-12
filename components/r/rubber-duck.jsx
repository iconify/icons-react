import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbh4ajb-s.css';
import '../../css/z/zm25tjttz.css';
import '../../css/l/lgpd2ygbz.css';
import '../../css/c/c8020z84q.css';
import '../../css/j/j1p8y9cko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hbh4ajb-s"/><path clip-rule="evenodd" class="zm25tjttz"/><path class="lgpd2ygbz"/><path class="c8020z84q"/><path class="j1p8y9cko"/></g>`,
		"fallback": "andrsrxn:rubber-duck",
	});
}

export default Component;
