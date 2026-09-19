import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj6eepmbw.css';
import '../../css/m/m-0zmcczs.css';
import '../../css/x/x9ach8b5k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="dj6eepmbw"/><path class="m-0zmcczs"/><path class="x9ach8b5k"/>`,
		"fallback": "carbon:tennis",
	});
}

export default Component;
