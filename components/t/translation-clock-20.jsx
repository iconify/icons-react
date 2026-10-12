import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl15a80lp.css';
import '../../css/b/b-i2932jm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl15a80lp"/><path class="b-i2932jm"/>`,
		"fallback": "garden:translation-clock-20",
	});
}

export default Component;
