import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi7zzdbka.css';
import '../../css/d/d_cc7c6xv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi7zzdbka"/><path class="d_cc7c6xv"/>`,
		"fallback": "selfhst:lingva-translate-light",
	});
}

export default Component;
