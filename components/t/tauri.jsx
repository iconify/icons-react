import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqhp__bzd.css';
import '../../css/o/oqawcacrr.css';
import '../../css/b/bwplvcc-j.css';
import '../../css/r/rcxx25bud.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqhp__bzd"/><path class="oqawcacrr"/><path class="bwplvcc-j"/><path class="rcxx25bud"/>`,
		"fallback": "devicon:tauri",
	});
}

export default Component;
