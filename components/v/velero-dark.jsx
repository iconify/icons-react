import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9-dtpbua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9-dtpbua"/>`,
		"fallback": "selfhst:velero-dark",
	});
}

export default Component;
