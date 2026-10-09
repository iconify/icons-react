import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbo2x6civ.css';
import '../../css/a/a-b9sjb0f.css';
import '../../css/r/roiba_3fu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbo2x6civ"/><path class="a-b9sjb0f"/><path class="roiba_3fu"/>`,
		"fallback": "energy-icons:plant-20-bold",
	});
}

export default Component;
