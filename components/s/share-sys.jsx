import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i00-uxbzk.css';
import '../../css/v/vp7a-_8gf.css';
import '../../css/u/uknsv7bvj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="i00-uxbzk"/><path class="vp7a-_8gf"/><path class="uknsv7bvj"/></g>`,
		"fallback": "icon-park:share-sys",
	});
}

export default Component;
