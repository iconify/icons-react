import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc_x2tbuz.css';
import '../../css/m/mms9xzmvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc_x2tbuz"/><path class="mms9xzmvs"/>`,
		"fallback": "solar:sticker-circle-bold",
	});
}

export default Component;
