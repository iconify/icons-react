import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aea_ip7em.css';
import '../../css/g/gze3pwb9p.css';
import '../../css/i/iaw_wybdt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aea_ip7em"/><path class="gze3pwb9p"/><path class="iaw_wybdt"/></g>`,
		"fallback": "streamline-color:qr-code",
	});
}

export default Component;
