import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhhr4kvhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhhr4kvhs"/>`,
		"fallback": "withicons:watch-solid",
	});
}

export default Component;
