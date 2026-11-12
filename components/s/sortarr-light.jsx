import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra6wx1tpy.css';
import '../../css/h/h5po_umnf.css';
import '../../css/a/a-z8z7pww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ra6wx1tpy"/><path class="h5po_umnf"/><path class="a-z8z7pww"/>`,
		"fallback": "selfhst:sortarr-light",
	});
}

export default Component;
