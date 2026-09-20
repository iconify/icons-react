import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgtrghm0d.css';
import '../../css/i/ius2dvbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="ft5dv1b6b"><path class="sgtrghm0d"/><path class="ius2dvbcq"/></g>`,
		"fallback": "proicons:text-effects",
	});
}

export default Component;
