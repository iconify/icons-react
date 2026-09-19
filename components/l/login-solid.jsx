import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re_szkbok.css';
import '../../css/t/tlsb-2bhs.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 re_szkbok"/><path class="clr-i-solid clr-i-solid-path-2 tlsb-2bhs"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:login-solid",
	});
}

export default Component;
