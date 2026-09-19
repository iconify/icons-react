import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u5h9wfb1s.css';
import '../../css/b/bsnl8abfb.css';
import '../../css/s/s9ym1bbnq.css';
import '../../css/k/ky_n--5tp.css';
import '../../css/a/a5nfr3bks.css';
import '../../css/b/bzes-obux.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u5h9wfb1s"/><path class="bsnl8abfb"/><path class="s9ym1bbnq"/><path class="ky_n--5tp"/><path class="a5nfr3bks"/><path class="bzes-obux"/></g>`,
		"fallback": "glyphs:tornado",
	});
}

export default Component;
