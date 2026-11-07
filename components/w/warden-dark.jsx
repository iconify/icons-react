import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/zu6ek4h1t.css';
import '../../css/r/rgbhf6bcm.css';

const viewBox = {"width":64,"height":77};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="zu6ek4h1t"/><path class="rgbhf6bcm"/></g>`,
		"fallback": "thesvg-color:warden-dark",
	});
}

export default Component;
