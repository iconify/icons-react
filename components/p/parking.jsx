import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/b/b31zzdblj.css';
import '../../css/o/odiqun3ee.css';
import '../../css/j/jyo4hrbyo.css';
import '../../css/v/vvcotmc0j.css';
import '../../css/h/h4se53ozf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="b31zzdblj"/><path class="odiqun3ee"/><path class="jyo4hrbyo"/><path class="vvcotmc0j"/><path class="h4se53ozf"/></g>`,
		"fallback": "withicons-retro:parking",
	});
}

export default Component;
