import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itw1ckbiw.css';
import '../../css/g/gryaribnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itw1ckbiw"/><path class="gryaribnw"/>`,
		"fallback": "ion:ios-cloudy-night-outline",
	});
}

export default Component;
