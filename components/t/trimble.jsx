import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy2it8y7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy2it8y7a"/>`,
		"fallback": "simple-icons:trimble",
	});
}

export default Component;
