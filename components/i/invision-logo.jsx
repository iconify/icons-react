import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wqfmzicbs.css';
import '../../css/u/ucieujeke.css';
import '../../css/q/q73mdkboh.css';
import '../../css/n/nt3774vdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="wqfmzicbs"/><path class="ucieujeke"/><path class="q73mdkboh"/><path class="nt3774vdp"/></g>`,
		"fallback": "streamline-logos:invision-logo",
	});
}

export default Component;
