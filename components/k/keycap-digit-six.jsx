import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0c92zbzi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0c92zbzi"/>`,
		"fallback": "dinkie-icons:keycap-digit-six",
	});
}

export default Component;
