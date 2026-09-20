import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qucg9_brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qucg9_brq"/>`,
		"fallback": "tabler:mood-neutral-filled",
	});
}

export default Component;
