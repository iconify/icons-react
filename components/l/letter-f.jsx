import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sch1fb_tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sch1fb_tq"/>`,
		"fallback": "vadivam:letter-f",
	});
}

export default Component;
