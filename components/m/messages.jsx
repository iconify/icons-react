import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/w/whkdn_tzm.css';
import '../../css/z/zil4b_b8y.css';
import '../../css/g/ggi7dz0kv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="whkdn_tzm"/><path class="zil4b_b8y"/><path class="ggi7dz0kv"/></g>`,
		"fallback": "icon-park:messages",
	});
}

export default Component;
