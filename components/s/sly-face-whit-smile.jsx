import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/x/xp-hp_2na.css';
import '../../css/k/khks3ihhz.css';
import '../../css/b/b4jtc2s1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="xp-hp_2na"/><path class="khks3ihhz"/><path class="b4jtc2s1i"/></g>`,
		"fallback": "icon-park:sly-face-whit-smile",
	});
}

export default Component;
