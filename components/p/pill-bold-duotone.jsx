import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-1l6vtvu.css';
import '../../css/z/zdawap23x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-1l6vtvu"/><path class="zdawap23x"/>`,
		"fallback": "solar:pill-bold-duotone",
	});
}

export default Component;
