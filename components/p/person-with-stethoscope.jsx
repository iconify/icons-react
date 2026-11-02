import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra0v5m8_f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra0v5m8_f"/>`,
		"fallback": "pinhead:person-with-stethoscope",
	});
}

export default Component;
