import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efi4ej_dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efi4ej_dk"/>`,
		"fallback": "boxicons:loader-lines-alt-filled",
	});
}

export default Component;
