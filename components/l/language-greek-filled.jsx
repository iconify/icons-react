import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h876prbla.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h876prbla"/>`,
		"fallback": "dinkie-icons:language-greek-filled",
	});
}

export default Component;
