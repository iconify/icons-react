import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq4poxb2f.css';
import '../../css/l/lj93ifb1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq4poxb2f"/><path class="lj93ifb1w"/>`,
		"fallback": "selfhst:proton-mail-dark",
	});
}

export default Component;
