import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7yibgh_o.css';
import '../../css/w/wvo8mpb5j.css';
import '../../css/i/iym-rnbyp.css';
import '../../css/i/ii92-rbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i7yibgh_o"/><path class="wvo8mpb5j"/><path class="iym-rnbyp"/><path class="ii92-rbof"/></g>`,
		"fallback": "lucide-extended:message-square-quote-duotone",
	});
}

export default Component;
