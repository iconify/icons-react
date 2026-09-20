import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/o/o-lus3buv.css';
import '../../css/i/ifhcuvbfd.css';
import '../../css/o/om7xcw6kh.css';
import '../../css/f/fxaxtssgb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="o-lus3buv"/><path class="ifhcuvbfd"/><path class="om7xcw6kh"/><path class="fxaxtssgb"/></g>`,
		"fallback": "streamline-flex-color:music-note-circle",
	});
}

export default Component;
