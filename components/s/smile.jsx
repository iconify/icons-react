import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeqki-bsn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeqki-bsn"/>`,
		"fallback": "fa7-solid:smile",
	});
}

export default Component;
