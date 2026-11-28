import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znq7qdb9f.css';
import '../../css/a/ak0d4abdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary znq7qdb9f"/><path class="ak0d4abdn primary"/>`,
		"fallback": "iconaut:spade-duo",
	});
}

export default Component;
