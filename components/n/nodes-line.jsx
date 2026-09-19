import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlvvaabff.css';
import '../../css/e/egt81mk0n.css';
import '../../css/p/p48pzfb2s.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 nlvvaabff"/><path class="clr-i-outline clr-i-outline-path-2 egt81mk0n"/><path class="clr-i-outline clr-i-outline-path-3 p48pzfb2s"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:nodes-line",
	});
}

export default Component;
