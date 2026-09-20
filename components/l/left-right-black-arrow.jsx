import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue99ppw5a.css';
import '../../css/s/sach5mb4d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue99ppw5a"/><path class="sach5mb4d"/>`,
		"fallback": "openmoji:left-right-black-arrow",
	});
}

export default Component;
