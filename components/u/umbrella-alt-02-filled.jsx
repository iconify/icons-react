import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx2_beb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx2_beb9i"/>`,
		"fallback": "griddy-icons:umbrella-alt-02-filled",
	});
}

export default Component;
