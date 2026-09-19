import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-_7j5bcq.css';
import '../../css/x/x-uz1nb-i.css';
import '../../css/y/ym9wp7_vb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="n-_7j5bcq"/><path class="x-uz1nb-i"/><path class="ym9wp7_vb"/>`,
		"fallback": "famicons:newspaper-sharp",
	});
}

export default Component;
