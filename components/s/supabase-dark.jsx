import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd36bjb7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd36bjb7a"/>`,
		"fallback": "selfhst:supabase-dark",
	});
}

export default Component;
