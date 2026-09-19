import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/iq_vq268a.css';
import '../../css/m/mwre1nbej.css';
import '../../css/p/pde_5pbta.css';
import '../../css/g/glde1y8it.css';
import '../../css/d/djwypjtex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="iq_vq268a"/><path class="mwre1nbej"/><path class="pde_5pbta"/><path class="glde1y8it"/><path class="djwypjtex"/></g>`,
		"fallback": "circle-flags:lgbt-transgender",
	});
}

export default Component;
