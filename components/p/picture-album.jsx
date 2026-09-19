import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/aythmyq9y.css';
import '../../css/k/kv_hcvb_d.css';
import '../../css/h/h6zb2ac6o.css';
import '../../css/y/yt05gfblf.css';
import '../../css/h/hp8yphbba.css';
import '../../css/w/wy8doubpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="aythmyq9y"/><path class="kv_hcvb_d"/><path class="h6zb2ac6o"/><path class="yt05gfblf"/><path class="hp8yphbba"/><path class="wy8doubpa"/></g>`,
		"fallback": "icon-park:picture-album",
	});
}

export default Component;
