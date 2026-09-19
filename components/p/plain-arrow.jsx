import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgz_b5v2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgz_b5v2c"/>`,
		"fallback": "game-icons:plain-arrow",
	});
}

export default Component;
