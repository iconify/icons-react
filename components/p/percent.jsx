import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hrjfpsb2u.css';
import '../../css/o/oqdxdpjwb.css';
import '../../css/p/pdzzspcnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="hrjfpsb2u"/><path class="oqdxdpjwb"/><circle class="pdzzspcnx"/></g>`,
		"fallback": "meteor-icons:percent",
	});
}

export default Component;
