import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-t1cengz.css';
import '../../css/z/zcrfkcbnh.css';
import '../../css/a/ar21g0b6k.css';
import '../../css/y/y9qhvtben.css';
import '../../css/l/lsgevw3_u.css';
import '../../css/y/y87tfac2p.css';
import '../../css/b/bwfiz6bwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="d-t1cengz"/><circle class="zcrfkcbnh"/><circle class="ar21g0b6k"/><circle class="y9qhvtben"/><circle class="lsgevw3_u"/><circle class="y87tfac2p"/><circle class="bwfiz6bwj"/></g>`,
		"fallback": "icon-park:sound",
	});
}

export default Component;
