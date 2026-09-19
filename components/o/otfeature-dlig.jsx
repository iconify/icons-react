import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syooorb9x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syooorb9x"/>`,
		"fallback": "dinkie-icons:otfeature-dlig",
	});
}

export default Component;
