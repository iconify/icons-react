import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-zzlsbbv.css';
import '../../css/r/r6_w2mk7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="t-zzlsbbv"/><path class="r6_w2mk7w"/></g>`,
		"fallback": "cryptocurrency-color:lun",
	});
}

export default Component;
