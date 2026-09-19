import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m337tz4ru.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m337tz4ru"/>`,
		"fallback": "devicon-plain:nodemon",
	});
}

export default Component;
