import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jla_1tf4y.css';
import '../../css/t/tn4ed8o-x.css';
import '../../css/z/zlv53abcg.css';
import '../../css/i/izfpa27yi.css';
import '../../css/e/endkzgbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jla_1tf4y wm-shadow"/><path class="tn4ed8o-x"/><path class="zlv53abcg"/><path class="izfpa27yi"/><path class="endkzgbnp"/></g>`,
		"fallback": "withicons-retro:keyboard",
	});
}

export default Component;
