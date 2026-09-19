import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_uptrb-m.css';
import '../../css/v/vuogqwbrj.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_uptrb-m clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 vuogqwbrj"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:vm-solid",
	});
}

export default Component;
