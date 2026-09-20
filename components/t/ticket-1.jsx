import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1h0h5b4b.css';
import '../../css/i/ifw_kj01d.css';
import '../../css/t/t-2rr6bcd.css';
import '../../css/l/lng2rbcym.css';
import '../../css/o/ogj-ug2at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1h0h5b4b"/><path class="ifw_kj01d"/><path class="t-2rr6bcd"/><path class="lng2rbcym"/><path class="ogj-ug2at"/></g>`,
		"fallback": "streamline-ultimate-color:ticket-1",
	});
}

export default Component;
