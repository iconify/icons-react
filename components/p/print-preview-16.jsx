import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha_hsdf3i.css';
import '../../css/z/zfb6-85zp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha_hsdf3i"/><path clip-rule="evenodd" class="zfb6-85zp"/>`,
		"fallback": "qlementine-icons:print-preview-16",
	});
}

export default Component;
