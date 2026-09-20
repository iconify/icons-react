import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lf0becbdq.css';
import '../../css/m/muxlfbbte.css';

const viewBox = {"width":456,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lf0becbdq"/><path class="muxlfbbte"/></g>`,
		"fallback": "thesvg-color:microsoft-dotnet",
	});
}

export default Component;
