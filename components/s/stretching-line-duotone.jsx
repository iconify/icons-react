import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvkwtxc3k.css';
import '../../css/q/qsn3jttle.css';
import '../../css/s/sd67p86zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="xvkwtxc3k"/><path class="qsn3jttle"/><path class="sd67p86zj"/></g>`,
		"fallback": "solar:stretching-line-duotone",
	});
}

export default Component;
