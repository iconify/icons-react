import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bppa0jbgn.css';
import '../../css/z/znxmuy0xb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bppa0jbgn clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 znxmuy0xb"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:store-line",
	});
}

export default Component;
