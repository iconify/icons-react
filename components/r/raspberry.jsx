import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kixwr7b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kixwr7b0h"/>`,
		"fallback": "grommet-icons:raspberry",
	});
}

export default Component;
