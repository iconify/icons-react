import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gn2ydibpp.css';
import '../../css/n/njvarwbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gn2ydibpp"/><path class="njvarwbry"/></g>`,
		"fallback": "hugeicons:message-circle-reply",
	});
}

export default Component;
