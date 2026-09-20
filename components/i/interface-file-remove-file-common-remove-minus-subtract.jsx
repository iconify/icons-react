import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd89idvdg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd89idvdg"/>`,
		"fallback": "streamline:interface-file-remove-file-common-remove-minus-subtract",
	});
}

export default Component;
