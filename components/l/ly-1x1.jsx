import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k950p1_0a.css';
import '../../css/o/ojq_ufb-f.css';
import '../../css/y/y1y13wojh.css';
import '../../css/s/s3sx6db1y.css';
import '../../css/i/ih6ul4l0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGER8ssbjM"><path class="k950p1_0a"/></clipPath></defs><g clip-path="url(#SVGER8ssbjM)" transform="translate(-256 -12.3)scale(1.024)"><path class="ojq_ufb-f"/><path class="y1y13wojh"/><path class="s3sx6db1y"/><path class="ih6ul4l0l"/></g>`,
		"fallback": "flag:ly-1x1",
	});
}

export default Component;
