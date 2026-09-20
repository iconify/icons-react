import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8ryl_bho.css';
import '../../css/y/ywbxttbrs.css';
import '../../css/n/nb84o4bmx.css';
import '../../css/n/nxtigc8qe.css';
import '../../css/z/z8y16db2f.css';
import '../../css/q/qqixx5bvv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8ryl_bho"/><path class="ywbxttbrs"/><path class="nb84o4bmx"/><path class="nxtigc8qe"/><path class="z8y16db2f"/><path class="qqixx5bvv"/></g>`,
		"fallback": "streamline-kameleon-color:service-bell-duo",
	});
}

export default Component;
