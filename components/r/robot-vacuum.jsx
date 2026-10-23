import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/go4vyh_vn.css';
import '../../css/h/hwx4vkn6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="go4vyh_vn"/><path class="hwx4vkn6k"/></g>`,
		"fallback": "vadivam:robot-vacuum",
	});
}

export default Component;
