import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mms9xzmvs.css';
import '../../css/a/a2h-5ubrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mms9xzmvs"/><path clip-rule="evenodd" class="a2h-5ubrv"/>`,
		"fallback": "solar:sticker-smile-circle-2-bold",
	});
}

export default Component;
