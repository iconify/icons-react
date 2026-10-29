import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh6i10s1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh6i10s1p"/>`,
		"fallback": "withicons:server-solid",
	});
}

export default Component;
