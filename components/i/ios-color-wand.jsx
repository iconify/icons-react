import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozp132bbs.css';
import '../../css/k/k_6tzvb2b.css';
import '../../css/i/i-4jqsbkr.css';
import '../../css/w/w1skbub0m.css';
import '../../css/y/ys5vuebdl.css';
import '../../css/c/cji77xbex.css';
import '../../css/y/y2q84j_9t.css';
import '../../css/u/u8v0zbbqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozp132bbs"/><path class="k_6tzvb2b"/><path class="i-4jqsbkr"/><path class="w1skbub0m"/><path class="ys5vuebdl"/><path class="cji77xbex"/><path class="y2q84j_9t"/><path class="u8v0zbbqt"/>`,
		"fallback": "ion:ios-color-wand",
	});
}

export default Component;
