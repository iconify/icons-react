import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s42rpkduo.css';
import '../../css/w/wze762b-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="s42rpkduo"/><path class="wze762b-p"/></g>`,
		"fallback": "streamline-flex:router-wifi-network",
	});
}

export default Component;
