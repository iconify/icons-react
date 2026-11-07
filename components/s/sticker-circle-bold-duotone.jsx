import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mms9xzmvs.css';
import '../../css/g/gxzkh2b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mms9xzmvs"/><path class="gxzkh2b5t"/>`,
		"fallback": "solar:sticker-circle-bold-duotone",
	});
}

export default Component;
