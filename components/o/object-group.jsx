import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv9csh0_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv9csh0_w"/>`,
		"fallback": "grommet-icons:object-group",
	});
}

export default Component;
