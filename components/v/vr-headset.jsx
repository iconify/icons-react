import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdf5t1bep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdf5t1bep"/>`,
		"fallback": "at-icons:vr-headset",
	});
}

export default Component;
