import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8a4hlb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8a4hlb_k"/>`,
		"fallback": "vadivam:letter-m",
	});
}

export default Component;
