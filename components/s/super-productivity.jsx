import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8uw2mboa.css';
import '../../css/p/psr8s7bwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="b8uw2mboa"/><path class="psr8s7bwr"/>`,
		"fallback": "selfhst:super-productivity",
	});
}

export default Component;
