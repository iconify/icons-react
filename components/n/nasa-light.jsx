import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfzzc2b4k.css';
import '../../css/e/e558ozb4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfzzc2b4k"/><path class="e558ozb4n"/>`,
		"fallback": "selfhst:nasa-light",
	});
}

export default Component;
