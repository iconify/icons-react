import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbenfcpdi.css';
import '../../css/x/xgkw0sf-o.css';
import '../../css/k/ki1eibbkl.css';
import '../../css/f/f2jkcrhmz.css';
import '../../css/l/lrjc6obwt.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jbenfcpdi"/><path class="xgkw0sf-o"/><path class="ki1eibbkl"/><path class="f2jkcrhmz"/><path class="lrjc6obwt"/></g>`,
		"fallback": "cif:sc",
	});
}

export default Component;
