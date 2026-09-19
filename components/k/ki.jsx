import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/z-i7_mbxb.css';
import '../../css/s/s4-xrlbno.css';
import '../../css/o/oc935cbxy.css';
import '../../css/k/k8i2b7b5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="z-i7_mbxb"/><path class="s4-xrlbno"/><path class="oc935cbxy"/><path class="k8i2b7b5m"/></g>`,
		"fallback": "circle-flags:ki",
	});
}

export default Component;
