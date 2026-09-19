import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olk0odbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olk0odbzq"/>`,
		"fallback": "grommet-icons:user-police",
	});
}

export default Component;
