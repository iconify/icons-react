import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asx1s34lr.css';
import '../../css/l/l7gyyf0so.css';
import '../../css/x/xuvtw8qyt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asx1s34lr"/><path class="l7gyyf0so"/><path class="xuvtw8qyt"/>`,
		"fallback": "energy-icons:pelton-wheel-20",
	});
}

export default Component;
