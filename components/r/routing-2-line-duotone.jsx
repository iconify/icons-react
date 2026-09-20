import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwglx00ld.css';
import '../../css/o/ob4yjvgmw.css';
import '../../css/a/apesrwr1t.css';
import '../../css/f/fqjn5jbwe.css';
import '../../css/i/it9zzhbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hwglx00ld"/><path class="ob4yjvgmw"/><path class="apesrwr1t"/><path class="fqjn5jbwe"/><path class="it9zzhbms"/></g>`,
		"fallback": "solar:routing-2-line-duotone",
	});
}

export default Component;
