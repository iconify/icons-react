import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njcw9_wkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njcw9_wkp"/>`,
		"fallback": "coolicons:mail-open-fill-round",
	});
}

export default Component;
