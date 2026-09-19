import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwvbloz5r.css';
import '../../css/l/lci5694tm.css';
import '../../css/k/ky1jzfbzo.css';
import '../../css/q/qi-rlv_iu.css';
import '../../css/n/npc31oc-u.css';
import '../../css/m/md9gkcbpm.css';
import '../../css/y/y2x91xn1r.css';
import '../../css/w/wiabsebla.css';
import '../../css/p/pgh81vb5g.css';
import '../../css/k/k75lu4bbl.css';
import '../../css/r/rdw05lolk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="hwvbloz5r"/><rect class="lci5694tm"/><rect class="ky1jzfbzo"/><rect class="qi-rlv_iu"/><rect class="npc31oc-u"/><rect class="md9gkcbpm"/><rect class="y2x91xn1r"/><rect class="wiabsebla"/><rect class="pgh81vb5g"/><rect class="k75lu4bbl"/><rect class="rdw05lolk"/>`,
		"fallback": "ion:qr-code-outline",
	});
}

export default Component;
