import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7y0q8bps.css';
import '../../css/d/d25y6j89z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7y0q8bps"/><path class="d25y6j89z"/>`,
		"fallback": "octicon:shield-24",
	});
}

export default Component;
