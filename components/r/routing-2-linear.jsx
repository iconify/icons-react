import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwglx00ld.css';
import '../../css/o/ob4yjvgmw.css';
import '../../css/f/fqjn5jbwe.css';
import '../../css/i/it9zzhbms.css';
import '../../css/s/sauedd0uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hwglx00ld"/><path class="ob4yjvgmw"/><path class="fqjn5jbwe"/><path class="it9zzhbms"/><path class="sauedd0uf"/></g>`,
		"fallback": "solar:routing-2-linear",
	});
}

export default Component;
