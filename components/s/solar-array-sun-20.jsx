import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1l6u8egw.css';
import '../../css/w/w96urvnks.css';
import '../../css/m/m-4vi5jcl.css';
import '../../css/k/kj6hglb4g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1l6u8egw"/><path class="w96urvnks"/><path class="m-4vi5jcl"/><path class="kj6hglb4g"/>`,
		"fallback": "energy-icons:solar-array-sun-20",
	});
}

export default Component;
