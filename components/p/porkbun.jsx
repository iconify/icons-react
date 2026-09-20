import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvnkohbhv.css';
import '../../css/t/txu2pvbbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvnkohbhv"/><path class="txu2pvbbi"/>`,
		"fallback": "selfhst:porkbun",
	});
}

export default Component;
