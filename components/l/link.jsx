import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn34_cp0j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn34_cp0j"/>`,
		"fallback": "ep:link",
	});
}

export default Component;
