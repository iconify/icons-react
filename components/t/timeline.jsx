import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_95qvvbd.css';
import '../../css/z/zrvjsm0mw.css';
import '../../css/k/kf3vwpb8g.css';
import '../../css/p/px2snqh4c.css';
import '../../css/k/k1j616b9l.css';
import '../../css/p/ppg5djqzt.css';
import '../../css/d/d-twvrfug.css';
import '../../css/v/vxcvzjldq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_95qvvbd"/><path class="zrvjsm0mw"/><g class="kf3vwpb8g"><circle class="px2snqh4c"/><circle class="k1j616b9l"/><circle class="ppg5djqzt"/></g><path class="d-twvrfug"/><path class="vxcvzjldq"/>`,
		"fallback": "flat-color-icons:timeline",
	});
}

export default Component;
