import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8xwu9g6i.css';
import '../../css/x/xd6k6-cyk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="rotate(-90 256 256)" class="s8xwu9g6i"/><path class="xd6k6-cyk"/>`,
		"fallback": "ion:phone-landscape-outline",
	});
}

export default Component;
