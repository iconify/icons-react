import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at3xiib2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at3xiib2p"/>`,
		"fallback": "ix:publish-document",
	});
}

export default Component;
