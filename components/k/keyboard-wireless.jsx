import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p50xsybwg.css';
import '../../css/v/vyw3bab3m.css';
import '../../css/c/c-ttw9bgb.css';
import '../../css/n/nx7qwxbuv.css';
import '../../css/n/nozo9gbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p50xsybwg"/><path class="vyw3bab3m"/><path class="c-ttw9bgb"/><path class="nx7qwxbuv"/><path class="nozo9gbvc"/></g>`,
		"fallback": "streamline-ultimate-color:keyboard-wireless",
	});
}

export default Component;
