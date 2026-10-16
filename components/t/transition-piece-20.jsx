import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgu7rtifi.css';
import '../../css/z/zo-uulbpt.css';
import '../../css/b/b_y3iwjuc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgu7rtifi"/><path class="zo-uulbpt"/><path class="b_y3iwjuc"/>`,
		"fallback": "energy-icons:transition-piece-20",
	});
}

export default Component;
