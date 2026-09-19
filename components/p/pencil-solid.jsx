import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv7lodb7m.css';
import '../../css/l/l4s4jba5v.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 xv7lodb7m"/><path class="clr-i-solid clr-i-solid-path-2 l4s4jba5v"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pencil-solid",
	});
}

export default Component;
