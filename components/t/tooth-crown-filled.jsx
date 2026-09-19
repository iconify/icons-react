import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui9qyde_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ui9qyde_x"/>`,
		"fallback": "griddy-icons:tooth-crown-filled",
	});
}

export default Component;
