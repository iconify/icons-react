import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5j-txj5n.css';
import '../../css/q/qga2a08ds.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 h5j-txj5n"/><path class="clr-i-outline clr-i-outline-path-2 qga2a08ds"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:upload-cloud-line",
	});
}

export default Component;
