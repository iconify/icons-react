import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm5_ombgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm5_ombgy"/>`,
		"fallback": "selfhst:voxmedia-coral-light",
	});
}

export default Component;
