import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5p876b5i.css';
import '../../css/v/vwv3t9bhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5p876b5i"/><path class="vwv3t9bhq"/>`,
		"fallback": "selfhst:quire-ink-dark",
	});
}

export default Component;
