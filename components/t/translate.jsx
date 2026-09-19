import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/avm7xkbly.css';
import '../../css/q/qpr5j8bpt.css';
import '../../css/l/lc328beab.css';
import '../../css/c/c3chzcpsd.css';
import '../../css/c/cfnlf1fyi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="avm7xkbly"/><path class="qpr5j8bpt"/><path class="lc328beab"/><path class="c3chzcpsd"/><path class="cfnlf1fyi"/></g>`,
		"fallback": "icon-park:translate",
	});
}

export default Component;
