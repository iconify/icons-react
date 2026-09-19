import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4al-jb7f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4al-jb7f"/>`,
		"fallback": "dinkie-icons:uni6709-box-filled",
	});
}

export default Component;
