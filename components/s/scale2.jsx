import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_89b3bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_89b3bmr"/>`,
		"fallback": "reicon:scale2",
	});
}

export default Component;
