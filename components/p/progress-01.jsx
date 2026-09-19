import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_c5_kbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a_c5_kbud"/>`,
		"fallback": "hugeicons:progress-01",
	});
}

export default Component;
