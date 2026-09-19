import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v65-pnbdf.css';
import '../../css/x/x7p3n33kb.css';
import '../../css/w/woyhp54cm.css';
import '../../css/q/qwc3a0irv.css';
import '../../css/f/fu441_fbu.css';
import '../../css/d/d6o62kkbs.css';
import '../../css/o/o4ydui5gl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v65-pnbdf"/><path class="x7p3n33kb"/><path class="woyhp54cm"/><path class="qwc3a0irv"/><path class="fu441_fbu"/><path class="d6o62kkbs"/><path class="o4ydui5gl"/>`,
		"fallback": "ion:ios-barcode",
	});
}

export default Component;
