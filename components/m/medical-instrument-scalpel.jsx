import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4i4ecc8t.css';
import '../../css/j/jcp5cxblp.css';
import '../../css/c/ce647lk3f.css';
import '../../css/m/mrg2o8b6n.css';
import '../../css/h/hzpulb-3p.css';
import '../../css/b/byi3wxb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4i4ecc8t"/><path class="jcp5cxblp"/><path class="ce647lk3f"/><path class="mrg2o8b6n"/><path class="hzpulb-3p"/><path class="byi3wxb0s"/></g>`,
		"fallback": "streamline-ultimate-color:medical-instrument-scalpel",
	});
}

export default Component;
