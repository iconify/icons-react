import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyxq9bb-b.css';
import '../../css/r/r6p1cia5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyxq9bb-b"/><path clip-rule="evenodd" class="r6p1cia5d"/>`,
		"fallback": "ix:subtitle",
	});
}

export default Component;
