import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2po_xba.css';
import '../../css/y/ynodcdbwu.css';
import '../../css/b/b_ldx5doh.css';
import '../../css/x/x19sclg2p.css';
import '../../css/h/hdd927_vo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at2po_xba"/><path class="ynodcdbwu"/><path class="b_ldx5doh"/><path class="x19sclg2p"/><path class="hdd927_vo"/>`,
		"fallback": "energy-icons:printer-3d-48-bold",
	});
}

export default Component;
