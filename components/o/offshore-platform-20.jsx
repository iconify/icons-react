import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp1-1hbdm.css';
import '../../css/v/v0b2vloiw.css';
import '../../css/a/a8mu2cb-t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp1-1hbdm"/><path class="v0b2vloiw"/><path class="a8mu2cb-t"/>`,
		"fallback": "energy-icons:offshore-platform-20",
	});
}

export default Component;
