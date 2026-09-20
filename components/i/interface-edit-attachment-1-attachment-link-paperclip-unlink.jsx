import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu0-_oxqp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu0-_oxqp"/>`,
		"fallback": "streamline:interface-edit-attachment-1-attachment-link-paperclip-unlink",
	});
}

export default Component;
