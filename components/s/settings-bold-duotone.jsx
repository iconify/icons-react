import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gce_q8bwk.css';
import '../../css/p/pahtwyu4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gce_q8bwk"/><path class="pahtwyu4s"/>`,
		"fallback": "solar:settings-bold-duotone",
	});
}

export default Component;
