import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo2_hufaw.css';
import '../../css/k/k4x3-0b4z.css';
import '../../css/f/f2fykithr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo2_hufaw"/><path class="k4x3-0b4z"/><path class="f2fykithr"/>`,
		"fallback": "energy-icons:plant-20",
	});
}

export default Component;
