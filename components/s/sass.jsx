import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_tg1r48l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_tg1r48l"/>`,
		"fallback": "bxl:sass",
	});
}

export default Component;
