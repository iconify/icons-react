import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/swe9_5g2w.css';
import '../../css/d/dfbm7xnrc.css';
import '../../css/x/x4hdojbcw.css';
import '../../css/o/okjnj2ehc.css';
import '../../css/c/cnefw2bjl.css';
import '../../css/b/bj0qptb3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="swe9_5g2w"/><path class="dfbm7xnrc"/><path class="x4hdojbcw"/><path class="okjnj2ehc"/><path class="cnefw2bjl"/><path class="bj0qptb3a"/></g>`,
		"fallback": "icon-park:usb-type-c",
	});
}

export default Component;
