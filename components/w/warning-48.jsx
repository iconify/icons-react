import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbr0qr9vh.css';
import '../../css/e/ev7ph6bec.css';
import '../../css/f/fancdkatq.css';
import '../../css/g/gk8gx7whk.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/a/alyihb0gj.css';
import '../../css/o/osi2yu8vz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbr0qr9vh"/><path fill="url(#SVGtewVdbpY)" class="ev7ph6bec"/><path fill="url(#SVGguqBbbiJ)" class="fancdkatq"/><defs><linearGradient id="SVGtewVdbpY" x1="10.25" x2="34.452" y1="-1.938" y2="46.585" gradientUnits="userSpaceOnUse"><stop class="gk8gx7whk"/><stop offset="1" class="h0zqot9pw"/></linearGradient><linearGradient id="SVGguqBbbiJ" x1="18.667" x2="28.274" y1="15" y2="35.496" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="osi2yu8vz"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:warning-48",
	});
}

export default Component;
