import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tipk8qtgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tipk8qtgw"/>`,
		"fallback": "uis:microscope",
	});
}

export default Component;
