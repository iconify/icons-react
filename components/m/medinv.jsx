import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-0o19e9y.css';
import '../../css/e/e-6h781vx.css';
import '../../css/u/unlskpb2f.css';
import '../../css/j/jwwt8sbua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-0o19e9y"/><path class="e-6h781vx"/><path class="unlskpb2f"/><circle class="jwwt8sbua"/>`,
		"fallback": "selfhst:medinv",
	});
}

export default Component;
