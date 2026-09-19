import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyn2r2b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyn2r2b5d"/>`,
		"fallback": "bxl:payload-cms",
	});
}

export default Component;
