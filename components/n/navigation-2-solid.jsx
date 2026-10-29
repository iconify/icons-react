import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec5wflrnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec5wflrnp"/>`,
		"fallback": "withicons:navigation-2-solid",
	});
}

export default Component;
