import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud-qa-b2f.css';
import '../../css/p/pkuhlsb_t.css';
import '../../css/t/t5je5wb4q.css';
import '../../css/y/y_v3hnb2o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ud-qa-b2f"/><path class="clr-i-outline clr-i-outline-path-2 pkuhlsb_t"/><path class="clr-i-outline clr-i-outline-path-3 t5je5wb4q"/><path class="clr-i-outline clr-i-outline-path-4 y_v3hnb2o"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:process-on-vm-line",
	});
}

export default Component;
