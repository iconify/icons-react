import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/ni1whmukm.css';
import '../../css/h/hj1zph81q.css';
import '../../css/w/w5m4ym-kp.css';
import '../../css/l/lhse80odg.css';
import '../../css/c/cziqgt-tn.css';
import '../../css/k/k5nezx-kn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ni1whmukm"/><path class="hj1zph81q"/><path class="w5m4ym-kp"/><path class="lhse80odg"/><path class="cziqgt-tn"/><path class="k5nezx-kn"/></g>`,
		"fallback": "icon-park:more-app",
	});
}

export default Component;
