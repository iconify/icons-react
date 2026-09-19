import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bppa0jbgn.css';
import '../../css/o/o2-cvm_8e.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bppa0jbgn clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 o2-cvm_8e"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:store-solid",
	});
}

export default Component;
