import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o80njac1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o80njac1o"/>`,
		"fallback": "griddy-icons:tooth-root-canal-filled",
	});
}

export default Component;
