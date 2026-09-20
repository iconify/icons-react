import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox6ijkv2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox6ijkv2w"/>`,
		"fallback": "selfhst:lexware-light",
	});
}

export default Component;
