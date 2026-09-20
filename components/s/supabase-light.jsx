import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn50r5bat.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn50r5bat"/>`,
		"fallback": "selfhst:supabase-light",
	});
}

export default Component;
