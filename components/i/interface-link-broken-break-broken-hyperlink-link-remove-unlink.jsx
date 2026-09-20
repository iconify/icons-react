import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuwe5n7gt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuwe5n7gt"/>`,
		"fallback": "streamline:interface-link-broken-break-broken-hyperlink-link-remove-unlink",
	});
}

export default Component;
