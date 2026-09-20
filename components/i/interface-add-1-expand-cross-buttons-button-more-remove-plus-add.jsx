import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me-v67brs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me-v67brs"/>`,
		"fallback": "streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add",
	});
}

export default Component;
