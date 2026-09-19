import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsxk0_bpo.css';
import '../../css/u/usq2d7duw.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsxk0_bpo"/><path class="usq2d7duw"/>`,
		"fallback": "fontisto:mic",
	});
}

export default Component;
