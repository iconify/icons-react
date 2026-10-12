import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/naysjv-ce.css';
import '../../css/g/g-mtj-z5m.css';
import '../../css/i/iqtg16bzl.css';
import '../../css/s/skp8tjssj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="naysjv-ce"/><path class="g-mtj-z5m"/><path class="iqtg16bzl"/><path class="skp8tjssj"/></g>`,
		"fallback": "lucide-extended:user-star-duotone",
	});
}

export default Component;
