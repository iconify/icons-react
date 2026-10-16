import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sexcl-g3a.css';
import '../../css/e/ekk1g4byl.css';
import '../../css/l/lw-5wybjf.css';
import '../../css/i/isb5rmbbx.css';
import '../../css/k/kaeozsbrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sexcl-g3a"/><path class="ekk1g4byl"/><path class="lw-5wybjf"/><path class="isb5rmbbx"/><path class="kaeozsbrc"/>`,
		"fallback": "energy-icons:moped-48",
	});
}

export default Component;
