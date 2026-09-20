import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iynd2kmao.css';
import '../../css/p/pdenvtb1q.css';
import '../../css/s/s43uxk1qx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iynd2kmao"/><path clip-rule="evenodd" class="pdenvtb1q"/><path class="s43uxk1qx"/>`,
		"fallback": "qlementine-icons:light-bulb-on-16",
	});
}

export default Component;
