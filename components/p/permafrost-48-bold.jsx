import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oppq-ug0u.css';
import '../../css/z/zl_yt6bwq.css';
import '../../css/x/x1ll44bzj.css';
import '../../css/p/ppb77-gkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oppq-ug0u"/><path class="zl_yt6bwq"/><path class="x1ll44bzj"/><path class="ppb77-gkq"/>`,
		"fallback": "energy-icons:permafrost-48-bold",
	});
}

export default Component;
