import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ammsdacwb.css';
import '../../css/e/e4mjywbbo.css';
import '../../css/t/tnw_cksns.css';
import '../../css/d/dyglo7bbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ammsdacwb"/><path class="e4mjywbbo"/><path class="tnw_cksns"/><path class="dyglo7bbt"/>`,
		"fallback": "ion:md-qr-scanner",
	});
}

export default Component;
