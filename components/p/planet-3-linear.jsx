import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/l/l56t-lhik.css';
import '../../css/n/nb8r4hiia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gshkn9qqt"/><path class="l56t-lhik"/><path class="nb8r4hiia"/></g>`,
		"fallback": "solar:planet-3-linear",
	});
}

export default Component;
