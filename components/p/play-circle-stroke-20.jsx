import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noz2g8nyr.css';
import '../../css/r/r6f3racak.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noz2g8nyr"/><path class="r6f3racak"/>`,
		"fallback": "garden:play-circle-stroke-20",
	});
}

export default Component;
