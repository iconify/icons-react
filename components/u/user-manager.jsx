import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfku7l3wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfku7l3wq"/>`,
		"fallback": "grommet-icons:user-manager",
	});
}

export default Component;
