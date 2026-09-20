import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz2639j6g.css';
import '../../css/r/rulnoebmk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz2639j6g"/><path class="rulnoebmk"/>`,
		"fallback": "selfhst:proton-mail-bridge-light",
	});
}

export default Component;
