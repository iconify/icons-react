import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ako88iouy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ako88iouy"/>`,
		"fallback": "streamline:interface-page-controller-fit-screen-fit-screen-adjust-display-artboard-frame-corner",
	});
}

export default Component;
