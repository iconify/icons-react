import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms8ze2e1u.css';
import '../../css/i/iht2h9vmf.css';
import '../../css/k/kpgp4ublc.css';
import '../../css/g/g3kcofbpa.css';
import '../../css/k/kj8t9lbdn.css';
import '../../css/w/w4z618btu.css';
import '../../css/p/pgcb02knn.css';
import '../../css/f/f96gkwwkx.css';
import '../../css/s/s1on-abyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms8ze2e1u wm-shadow"/><path class="iht2h9vmf wm-k"/><path class="kpgp4ublc wm-k"/><path class="g3kcofbpa wm-k"/><path class="kj8t9lbdn wm-k"/><path class="w4z618btu wm-k"/><path class="pgcb02knn wm-shine"/><path class="f96gkwwkx wm-s"/><path class="s1on-abyc wm-s"/>`,
		"fallback": "withicons-pastel:phone-outgoing",
	});
}

export default Component;
