import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd8a_3tzp.css';
import '../../css/z/zv9pswjkm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 vd8a_3tzp"/><path class="clr-i-solid clr-i-solid-path-2 zv9pswjkm"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:sign-out-solid",
	});
}

export default Component;
