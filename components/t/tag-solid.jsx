import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tclp1ib_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tclp1ib_e"/>`,
		"fallback": "pixel:tag-solid",
	});
}

export default Component;
