import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn9ruabtp.css';
import '../../css/c/cws_xd9jl.css';
import '../../css/j/jluxn4buv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 sn9ruabtp"/><path class="clr-i-outline clr-i-outline-path-2 cws_xd9jl"/><path class="clr-i-outline clr-i-outline-path-3 jluxn4buv"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pinned-line",
	});
}

export default Component;
