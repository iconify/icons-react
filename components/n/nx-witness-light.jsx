import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkmbvobhi.css';
import '../../css/f/fusmf-b6m.css';
import '../../css/l/ln0ym_was.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkmbvobhi"/><path class="fusmf-b6m"/><path class="ln0ym_was"/>`,
		"fallback": "selfhst:nx-witness-light",
	});
}

export default Component;
