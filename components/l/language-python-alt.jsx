import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmnsknblq.css';

const viewBox = {"width":464,"height":424};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmnsknblq"/>`,
		"fallback": "zmdi:language-python-alt",
	});
}

export default Component;
