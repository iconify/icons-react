import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9280qeki.css';
import '../../css/h/hnuq-sbxl.css';
import '../../css/o/ogjcl74fm.css';
import '../../css/r/rz4_8qb5z.css';
import '../../css/g/gxp3w8zpx.css';
import '../../css/r/rizqixbvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9280qeki"/><path class="hnuq-sbxl"/><path class="ogjcl74fm"/><path class="rz4_8qb5z"/><path class="gxp3w8zpx"/><path class="rizqixbvk"/>`,
		"fallback": "energy-icons:pantograph-charger-48",
	});
}

export default Component;
