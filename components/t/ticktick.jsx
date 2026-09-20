import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwva-4bto.css';
import '../../css/e/e84spf9xe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwva-4bto"/><path class="e84spf9xe"/>`,
		"fallback": "selfhst:ticktick",
	});
}

export default Component;
