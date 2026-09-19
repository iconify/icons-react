import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf1ibccow.css';
import '../../css/i/ikuuwzb6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf1ibccow"/><path class="ikuuwzb6a"/>`,
		"fallback": "famicons:layers-sharp",
	});
}

export default Component;
