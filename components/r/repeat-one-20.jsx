import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7bfszaos.css';
import '../../css/t/tbg_x-bdw.css';
import '../../css/s/sux4gdc6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7bfszaos"/><path class="tbg_x-bdw"/><path class="sux4gdc6p"/>`,
		"fallback": "energy-icons:repeat-one-20",
	});
}

export default Component;
