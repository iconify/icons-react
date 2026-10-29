import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otvodrc4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otvodrc4y"/>`,
		"fallback": "withicons:sofa-solid",
	});
}

export default Component;
