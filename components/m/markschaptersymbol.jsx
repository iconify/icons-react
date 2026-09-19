import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwtif3bjl.css';
import '../../css/h/h02ib-6ed.css';
import '../../css/y/yjpow2b-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwtif3bjl"/><path class="h02ib-6ed"/><path class="yjpow2b-h"/>`,
		"fallback": "fxemoji:markschaptersymbol",
	});
}

export default Component;
