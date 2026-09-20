import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alente67r.css';
import '../../css/k/kby-w4n6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alente67r"/><path class="kby-w4n6d"/>`,
		"fallback": "selfhst:open-source-initiative",
	});
}

export default Component;
