import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfvekc1nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfvekc1nw"/>`,
		"fallback": "grommet-icons:local",
	});
}

export default Component;
