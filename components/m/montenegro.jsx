import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe4d26bzb.css';
import '../../css/z/ztprroben.css';
import '../../css/b/bgbcw0zhe.css';
import '../../css/f/fcgj3e5gv.css';
import '../../css/k/kq-9e2b2s.css';
import '../../css/n/nyc3k_aql.css';
import '../../css/m/miaa_60dm.css';
import '../../css/k/k_nfbab1n.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe4d26bzb"/><path class="ztprroben"/><path class="bgbcw0zhe"/><path class="fcgj3e5gv"/><path class="kq-9e2b2s"/><path class="nyc3k_aql"/><path class="miaa_60dm"/><path class="k_nfbab1n"/>`,
		"fallback": "tabler-flags:montenegro",
	});
}

export default Component;
