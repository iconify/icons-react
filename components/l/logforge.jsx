import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4feargwz.css';
import '../../css/k/kw2-ojbmz.css';
import '../../css/g/grn2r87va.css';
import '../../css/b/bbv-wabqh.css';
import '../../css/l/lu5k3cc8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4feargwz"/><path class="kw2-ojbmz"/><path class="grn2r87va"/><path class="bbv-wabqh"/><path class="lu5k3cc8w"/>`,
		"fallback": "selfhst:logforge",
	});
}

export default Component;
