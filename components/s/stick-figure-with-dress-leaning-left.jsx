import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh5qxx6dx.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/z8qo5bcel.css';
import '../../css/o/o5_dnnb5d.css';
import '../../css/i/itbph-bbx.css';
import '../../css/m/m8195sbyc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh5qxx6dx"/><g class="brzn_0bpr"><path class="z8qo5bcel"/><path class="o5_dnnb5d"/><path class="itbph-bbx"/><circle class="m8195sbyc"/></g>`,
		"fallback": "openmoji:stick-figure-with-dress-leaning-left",
	});
}

export default Component;
