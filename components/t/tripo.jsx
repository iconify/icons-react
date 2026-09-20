import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a-4y-gb4g.css';
import '../../css/d/d-5phzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a-4y-gb4g"/><path class="d-5phzbvj"/></g>`,
		"fallback": "thesvg-color:tripo",
	});
}

export default Component;
