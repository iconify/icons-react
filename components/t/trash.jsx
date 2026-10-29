import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxkycjbej.css';
import '../../css/f/fff81-bmi.css';
import '../../css/f/flstcrbhi.css';
import '../../css/o/o71e8i_kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxkycjbej wm-a"/><path class="fff81-bmi wm-k"/><path class="flstcrbhi wm-k"/><path class="o71e8i_kg wm-a"/>`,
		"fallback": "withicons-bauhaus:trash",
	});
}

export default Component;
