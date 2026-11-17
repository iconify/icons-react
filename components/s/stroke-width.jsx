import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lj3bq3_bb.css';
import '../../css/q/qw98xtb2r.css';
import '../../css/z/zue-gtm4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lj3bq3_bb"/><rect class="qw98xtb2r"/><rect class="zue-gtm4o"/></g>`,
		"fallback": "lucide:stroke-width",
	});
}

export default Component;
