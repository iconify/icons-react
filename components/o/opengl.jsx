import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruiztq3ok.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruiztq3ok"/>`,
		"fallback": "devicon-plain:opengl",
	});
}

export default Component;
