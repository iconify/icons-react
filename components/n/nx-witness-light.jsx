import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iudnm730z.css';
import '../../css/l/lwo5f24pv.css';
import '../../css/l/ln0ym_was.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iudnm730z"/><path class="lwo5f24pv"/><path class="ln0ym_was"/>`,
		"fallback": "selfhst:nx-witness-light",
	});
}

export default Component;
