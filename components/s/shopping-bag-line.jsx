import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjgp3eu1f.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjgp3eu1f clr-i-outline clr-i-outline-path-1"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shopping-bag-line",
	});
}

export default Component;
