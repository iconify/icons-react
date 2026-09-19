import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv7n29b5t.css';
import '../../css/i/i38uy4b8i.css';
import '../../css/a/avix9wb6i.css';
import '../../css/l/l4vx84bjp.css';
import '../../css/h/ho45usbji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv7n29b5t"/><path class="i38uy4b8i"/><path class="avix9wb6i"/><path class="l4vx84bjp"/><path class="ho45usbji"/>`,
		"fallback": "fxemoji:tulip",
	});
}

export default Component;
