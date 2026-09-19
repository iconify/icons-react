import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoccat2cq.css';
import '../../css/e/ev59uebdl.css';
import '../../css/i/imf56g2tr.css';
import '../../css/d/dy2dcuksu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uoccat2cq"/><circle class="ev59uebdl"/><path class="imf56g2tr"/><path class="dy2dcuksu"/>`,
		"fallback": "gis:proj-point",
	});
}

export default Component;
