import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/tllbsg4up.css';
import '../../css/m/mail3acsf.css';
import '../../css/k/kcsygmb2d.css';
import '../../css/z/zxu45kbfa.css';
import '../../css/x/xdta9nrsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="tllbsg4up"/><path clip-rule="evenodd" class="mail3acsf"/><path class="kcsygmb2d"/><path class="zxu45kbfa"/><path class="xdta9nrsb"/></g>`,
		"fallback": "icon-park:tape",
	});
}

export default Component;
