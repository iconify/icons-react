import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/o/okvtb5b2u.css';
import '../../css/g/gy9coyx8u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="okvtb5b2u"/><path class="gy9coyx8u"/>`,
		"fallback": "ant-design:minus-square-twotone",
	});
}

export default Component;
