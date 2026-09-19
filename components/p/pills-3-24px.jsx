import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpini_mch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hpini_mch"/>`,
		"fallback": "healthicons:pills-3-24px",
	});
}

export default Component;
