import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkd8ybcyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkd8ybcyp"/>`,
		"fallback": "fe:messanger",
	});
}

export default Component;
