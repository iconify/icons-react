import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl21qac3s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl21qac3s"/>`,
		"fallback": "dinkie-icons:translate-arabic-latin",
	});
}

export default Component;
