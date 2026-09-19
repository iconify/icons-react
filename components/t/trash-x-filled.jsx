import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faxo8wb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faxo8wb2y"/>`,
		"fallback": "boxicons:trash-x-filled",
	});
}

export default Component;
