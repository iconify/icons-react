import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2ghah3xq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2ghah3xq"/>`,
		"fallback": "game-icons:thunder-blade",
	});
}

export default Component;
