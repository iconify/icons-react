import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfdz155uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfdz155uq"/>`,
		"fallback": "grommet-icons:tty",
	});
}

export default Component;
