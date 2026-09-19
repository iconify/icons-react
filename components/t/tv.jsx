import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/uhj0xpbzi.css';
import '../../css/j/jtvtzqbpm.css';
import '../../css/n/n12i5kbbx.css';
import '../../css/l/lme8rwv7r.css';
import '../../css/b/bpfsbbb0e.css';
import '../../css/k/k0_gd0tpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="uhj0xpbzi"/><path class="jtvtzqbpm"/><path class="n12i5kbbx"/><path class="lme8rwv7r"/><path class="bpfsbbb0e"/><path class="k0_gd0tpv"/></g>`,
		"fallback": "circle-flags:tv",
	});
}

export default Component;
