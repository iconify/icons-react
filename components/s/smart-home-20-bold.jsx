import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coivkzecr.css';
import '../../css/u/ukwr40b7t.css';
import '../../css/h/hsryopm_k.css';
import '../../css/z/zc6wdwbae.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coivkzecr"/><path class="ukwr40b7t"/><path class="hsryopm_k"/><path class="zc6wdwbae"/>`,
		"fallback": "energy-icons:smart-home-20-bold",
	});
}

export default Component;
