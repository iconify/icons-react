import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flebhl8-j.css';
import '../../css/i/ioxwpib4x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flebhl8-j"/><path class="ioxwpib4x"/>`,
		"fallback": "energy-icons:notebook-20",
	});
}

export default Component;
