import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu404jbxe.css';
import '../../css/u/u72bpgb6i.css';
import '../../css/w/w4b6cbclf.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu404jbxe"/><path class="u72bpgb6i"/><path class="w4b6cbclf"/>`,
		"fallback": "flag:tk-4x3",
	});
}

export default Component;
