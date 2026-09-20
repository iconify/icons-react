import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rcd-wfdbo.css';
import '../../css/k/k-k38lq0d.css';
import '../../css/t/t76woky8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rcd-wfdbo"/><path class="k-k38lq0d"/><path class="t76woky8h"/></g>`,
		"fallback": "streamline-freehand:phone-actions-ringing",
	});
}

export default Component;
