import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyw-02bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyw-02bng"/>`,
		"fallback": "iconaut:pie-chart-solid",
	});
}

export default Component;
