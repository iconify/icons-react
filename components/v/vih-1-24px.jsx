import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1k85xbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q1k85xbfp"/>`,
		"fallback": "healthicons:vih-1-24px",
	});
}

export default Component;
