import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/f__0e8bvt.css';
import '../../css/s/slenfkbvb.css';
import '../../css/z/zzrfdtxni.css';
import '../../css/f/f7n_c543n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="f__0e8bvt"/><path class="slenfkbvb"/><path class="zzrfdtxni"/><path class="f7n_c543n"/></g>`,
		"fallback": "icon-park:watch",
	});
}

export default Component;
