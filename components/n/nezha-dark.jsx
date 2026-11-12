import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-r527bwo.css';
import '../../css/s/s222euk2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-r527bwo"/><path class="s222euk2g"/>`,
		"fallback": "selfhst:nezha-dark",
	});
}

export default Component;
