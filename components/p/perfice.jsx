import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqaaen3kj.css';
import '../../css/a/ac-8vg33b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqaaen3kj"/><path class="ac-8vg33b"/>`,
		"fallback": "selfhst:perfice",
	});
}

export default Component;
