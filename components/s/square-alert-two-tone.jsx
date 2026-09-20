import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl2nz2boo.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/c/c5yb8bdcb.css';
import '../../css/p/pcr6xabis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dl2nz2boo"/><path class="i5lvicvhn"/><path class="c5yb8bdcb"/><path class="pcr6xabis"/></g>`,
		"fallback": "keyline-icons:square-alert-two-tone",
	});
}

export default Component;
