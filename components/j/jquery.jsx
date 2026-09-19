import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjfcwybnl.css';
import '../../css/v/vrncrobzx.css';
import '../../css/k/ki4mvymot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjfcwybnl"/><path class="vrncrobzx"/><path class="ki4mvymot"/>`,
		"fallback": "bxl:jquery",
	});
}

export default Component;
