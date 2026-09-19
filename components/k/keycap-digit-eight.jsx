import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mevblj9nz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mevblj9nz"/>`,
		"fallback": "dinkie-icons:keycap-digit-eight",
	});
}

export default Component;
