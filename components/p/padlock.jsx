import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz5933b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz5933b6f"/>`,
		"fallback": "uis:padlock",
	});
}

export default Component;
