import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi4wg5b2c.css';
import '../../css/o/obi015b0i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi4wg5b2c"/><path class="obi015b0i"/>`,
		"fallback": "devicon:materializecss",
	});
}

export default Component;
