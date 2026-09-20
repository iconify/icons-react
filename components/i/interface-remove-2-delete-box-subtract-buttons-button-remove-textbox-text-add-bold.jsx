import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuik6ebaw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="iuik6ebaw"/>`,
		"fallback": "streamline:interface-remove-2-delete-box-subtract-buttons-button-remove-textbox-text-add-bold",
	});
}

export default Component;
