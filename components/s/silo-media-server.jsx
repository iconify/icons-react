import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew-sr1mcj.css';
import '../../css/m/my_ftigmx.css';
import '../../css/w/w1-6qwzkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew-sr1mcj"/><path class="my_ftigmx"/><path class="w1-6qwzkf"/>`,
		"fallback": "selfhst:silo-media-server",
	});
}

export default Component;
