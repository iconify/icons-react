import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju6kvy1jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju6kvy1jw"/>`,
		"fallback": "iconaut:square-power-solid",
	});
}

export default Component;
