import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyfm_1-bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyfm_1-bm"/>`,
		"fallback": "vadivam:letter-n",
	});
}

export default Component;
