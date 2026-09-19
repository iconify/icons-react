import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q36m0bb5w.css';
import '../../css/x/x84itwbxe.css';
import '../../css/o/otwfeac8c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q36m0bb5w"/><path class="x84itwbxe"/><path class="otwfeac8c"/>`,
		"fallback": "clarity:tape-drive-line",
	});
}

export default Component;
