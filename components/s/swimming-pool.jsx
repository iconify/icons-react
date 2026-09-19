import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/q/q89w_4_5l.css';
import '../../css/m/mv0rwabts.css';
import '../../css/w/wdid9rbys.css';
import '../../css/q/qx6zi9s9r.css';
import '../../css/r/rejaxfbru.css';
import '../../css/z/zpumeab6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="q89w_4_5l"/><path class="mv0rwabts"/><path class="wdid9rbys"/><path class="qx6zi9s9r"/><path class="rejaxfbru"/><path class="zpumeab6m"/></g>`,
		"fallback": "icon-park:swimming-pool",
	});
}

export default Component;
