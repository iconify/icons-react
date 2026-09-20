import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfdov_-la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfdov_-la"/>`,
		"fallback": "tabler:player-stop",
	});
}

export default Component;
