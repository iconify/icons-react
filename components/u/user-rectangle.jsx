import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk5sbi9lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk5sbi9lr"/>`,
		"fallback": "bxs:user-rectangle",
	});
}

export default Component;
