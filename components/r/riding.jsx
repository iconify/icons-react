import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bueyivd2g.css';
import '../../css/x/xcl2xpzvj.css';
import '../../css/s/ss_1d09nn.css';
import '../../css/q/q8ka45beo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="bueyivd2g"/><path class="xcl2xpzvj"/><circle class="ss_1d09nn"/><circle class="q8ka45beo"/></g>`,
		"fallback": "icon-park-outline:riding",
	});
}

export default Component;
