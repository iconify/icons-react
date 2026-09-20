import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmxtxk5go.css';
import '../../css/o/ofbjwwbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmxtxk5go"/><path class="ofbjwwbcg"/>`,
		"fallback": "selfhst:visio-meet",
	});
}

export default Component;
