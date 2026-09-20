import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_dkf0bpd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_dkf0bpd"/>`,
		"fallback": "pinhead:utility-device-with-sewage-pipe-cross-section",
	});
}

export default Component;
