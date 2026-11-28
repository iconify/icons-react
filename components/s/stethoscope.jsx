import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmtouty9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmtouty9f"/>`,
		"fallback": "noviair:stethoscope",
	});
}

export default Component;
