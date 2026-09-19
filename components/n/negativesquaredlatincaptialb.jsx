import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou92kp7sw.css';
import '../../css/i/iobp--9yq.css';
import '../../css/g/gattl-bce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou92kp7sw"/><path class="iobp--9yq"/><path class="gattl-bce"/>`,
		"fallback": "fxemoji:negativesquaredlatincaptialb",
	});
}

export default Component;
