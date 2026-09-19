import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avwrpqfiu.css';
import '../../css/d/dw535lrsr.css';
import '../../css/b/btgs09vbq.css';
import '../../css/p/p1mqhfd7d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avwrpqfiu"/><path class="dw535lrsr"/><path class="btgs09vbq"/><path class="p1mqhfd7d"/>`,
		"fallback": "catppuccin:pixi-lock",
	});
}

export default Component;
