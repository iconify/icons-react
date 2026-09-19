import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf9lx2b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mf9lx2b7f"/>`,
		"fallback": "griddy-icons:user-cancel-filled",
	});
}

export default Component;
