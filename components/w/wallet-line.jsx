import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3ny5kbwg.css';
import '../../css/d/dwgdao0sa.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3ny5kbwg clr-i-outline clr-i-outline-path-1"/><circle class="clr-i-outline clr-i-outline-path-2 dwgdao0sa"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:wallet-line",
	});
}

export default Component;
