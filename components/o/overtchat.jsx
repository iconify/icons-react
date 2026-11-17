import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxqvf9bnm.css';
import '../../css/b/b0g2dsbne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxqvf9bnm"/><path class="b0g2dsbne"/>`,
		"fallback": "selfhst:overtchat",
	});
}

export default Component;
