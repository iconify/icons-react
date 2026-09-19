import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwvk4z-7p.css';
import '../../css/a/aa_03ls8j.css';
import '../../css/i/iki_14f2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwvk4z-7p"/><rect class="aa_03ls8j"/><rect class="aa_03ls8j"/><path class="iki_14f2o"/>`,
		"fallback": "ion:print-sharp",
	});
}

export default Component;
