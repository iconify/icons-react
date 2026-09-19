import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpzcf90uh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpzcf90uh"/>`,
		"fallback": "devicon:vaadin",
	});
}

export default Component;
