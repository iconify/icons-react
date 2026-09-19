import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3jn42bss.css';
import '../../css/s/s5yv7ofdy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 g3jn42bss"/><rect class="clr-i-outline clr-i-outline-path-2 s5yv7ofdy"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:text-color-line",
	});
}

export default Component;
