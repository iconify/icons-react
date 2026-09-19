import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-vufcb5d.css';
import '../../css/k/k1m1o24us.css';
import '../../css/v/vocvojbdw.css';
import '../../css/a/ar9njl9ac.css';
import '../../css/r/r8uj9wbtp.css';
import '../../css/h/hc6zy2bby.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i-vufcb5d"/><path class="k1m1o24us"/><path class="vocvojbdw"/><path clip-rule="evenodd" class="ar9njl9ac"/><path class="r8uj9wbtp"/><path class="hc6zy2bby"/></g>`,
		"fallback": "glyphs:ship-water-outline",
	});
}

export default Component;
