import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg7uj6b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mg7uj6b9d"/>`,
		"fallback": "griddy-icons:loan",
	});
}

export default Component;
