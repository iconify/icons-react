import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfzjyi6-c.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfzjyi6-c"/>`,
		"fallback": "thesvg:kraken",
	});
}

export default Component;
