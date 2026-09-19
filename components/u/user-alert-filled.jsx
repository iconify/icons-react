import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnhup6rke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnhup6rke"/>`,
		"fallback": "griddy-icons:user-alert-filled",
	});
}

export default Component;
