import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh582hbel.css';
import '../../css/e/e6zc0ccud.css';
import '../../css/b/bvqr90b7l.css';
import '../../css/f/fsaxo7b-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh582hbel"/><path class="e6zc0ccud"/><path class="bvqr90b7l"/><path class="fsaxo7b-r"/>`,
		"fallback": "selfhst:streamlink",
	});
}

export default Component;
