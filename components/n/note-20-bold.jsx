import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aopgjf_lo.css';
import '../../css/f/f-1ndobgc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aopgjf_lo"/><path class="f-1ndobgc"/>`,
		"fallback": "energy-icons:note-20-bold",
	});
}

export default Component;
