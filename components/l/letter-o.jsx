import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak0iqejps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak0iqejps"/>`,
		"fallback": "vadivam:letter-o",
	});
}

export default Component;
