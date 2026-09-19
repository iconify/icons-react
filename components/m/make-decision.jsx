import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7h9xac7h.css';
import '../../css/t/tg13ssbpj.css';
import '../../css/s/sccr_db_u.css';
import '../../css/r/rl9h0kgcw.css';
import '../../css/d/dxret8b4s.css';
import '../../css/b/b9y_mibdf.css';
import '../../css/y/y-bmg3j5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a7h9xac7h"><circle class="tg13ssbpj"/><circle class="sccr_db_u"/><path class="rl9h0kgcw"/><path class="dxret8b4s"/></g><path class="b9y_mibdf"/><path class="y-bmg3j5d"/>`,
		"fallback": "flat-color-icons:make-decision",
	});
}

export default Component;
