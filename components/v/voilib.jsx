import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idb1z9zzg.css';
import '../../css/k/kyzfwv8lz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idb1z9zzg"/><path class="kyzfwv8lz"/>`,
		"fallback": "selfhst:voilib",
	});
}

export default Component;
