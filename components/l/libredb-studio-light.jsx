import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw46dbp2r.css';
import '../../css/y/y8e-4bcjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw46dbp2r"/><path class="y8e-4bcjq"/>`,
		"fallback": "selfhst:libredb-studio-light",
	});
}

export default Component;
