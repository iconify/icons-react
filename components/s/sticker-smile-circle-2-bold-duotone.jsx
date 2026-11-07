import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dungusb0h.css';
import '../../css/w/wx-9qrjxn.css';
import '../../css/j/jjk_8ebes.css';
import '../../css/g/gxzkh2b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dungusb0h"/><path class="wx-9qrjxn"/><path class="jjk_8ebes"/><path class="gxzkh2b5t"/>`,
		"fallback": "solar:sticker-smile-circle-2-bold-duotone",
	});
}

export default Component;
