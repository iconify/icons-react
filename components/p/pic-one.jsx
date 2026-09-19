import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pbruvwbic.css';
import '../../css/b/b064tu1ws.css';
import '../../css/k/k4tp0gbvb.css';
import '../../css/s/sc_fqnbin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="pbruvwbic"/><path class="b064tu1ws"/><circle class="k4tp0gbvb"/><path class="sc_fqnbin"/></g>`,
		"fallback": "icon-park-outline:pic-one",
	});
}

export default Component;
