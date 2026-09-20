import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2k4tnisn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2k4tnisn"/>`,
		"fallback": "streamline:interface-delete-1-remove-add-button-buttons-delete",
	});
}

export default Component;
