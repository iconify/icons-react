import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/g/g2f1i4b_f.css';
import '../../css/r/r1gnjem7y.css';
import '../../css/y/yr0pp4b7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o58hkebvg"><path class="g2f1i4b_f"/><path class="r1gnjem7y"/><path class="yr0pp4b7r"/></g>`,
		"fallback": "xero-emoji:reminder-ribbon",
	});
}

export default Component;
