import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtjxqnmmf.css';
import '../../css/f/f2ws4q-cv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtjxqnmmf"/><path class="f2ws4q-cv"/>`,
		"fallback": "energy-icons:switchgear-20",
	});
}

export default Component;
