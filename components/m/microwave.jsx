import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ijvlnob_b.css';
import '../../css/y/yqaeyhb-p.css';
import '../../css/a/a-fwg2jzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ijvlnob_b"/><rect class="yqaeyhb-p"/><path class="a-fwg2jzb"/></g>`,
		"fallback": "lucide:microwave",
	});
}

export default Component;
