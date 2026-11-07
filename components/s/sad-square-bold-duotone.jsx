import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/c/ce8u24m5f.css';
import '../../css/g/go4rm8bar.css';
import '../../css/p/pydsljbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="ce8u24m5f"/><path class="go4rm8bar"/><path class="pydsljbvg"/>`,
		"fallback": "solar:sad-square-bold-duotone",
	});
}

export default Component;
