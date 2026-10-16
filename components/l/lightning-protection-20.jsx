import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifdij495w.css';
import '../../css/f/f2vx_69qf.css';
import '../../css/z/zznb6pbvc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifdij495w"/><path class="f2vx_69qf"/><path class="zznb6pbvc"/>`,
		"fallback": "energy-icons:lightning-protection-20",
	});
}

export default Component;
