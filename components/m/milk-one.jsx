import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q20en-kwy.css';
import '../../css/d/d-vh2eb1o.css';
import '../../css/o/og0q7vinq.css';
import '../../css/v/vlngqccob.css';
import '../../css/y/yc_3uj-3a.css';
import '../../css/r/rcio75bwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="q20en-kwy"/><path class="d-vh2eb1o"/><path class="og0q7vinq"/><path class="vlngqccob"/><path class="yc_3uj-3a"/><path class="rcio75bwk"/></g>`,
		"fallback": "icon-park:milk-one",
	});
}

export default Component;
