import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7xu5rhoq.css';
import '../../css/u/uqr-rtqnv.css';
import '../../css/r/rbwpa9bmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="z7xu5rhoq"/><path class="uqr-rtqnv"/><path class="rbwpa9bmd"/>`,
		"fallback": "carbon:query",
	});
}

export default Component;
