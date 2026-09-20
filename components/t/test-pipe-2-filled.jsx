import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-wa9ac3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-wa9ac3p"/>`,
		"fallback": "tabler:test-pipe-2-filled",
	});
}

export default Component;
