import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qru9siboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qru9siboc"/>`,
		"fallback": "simple-icons:overcast",
	});
}

export default Component;
