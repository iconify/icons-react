import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxvlzcc5k.css';
import '../../css/a/apb1-vbtb.css';
import '../../css/k/k-dy_gbdp.css';
import '../../css/c/catopm8pb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxvlzcc5k"/><path class="apb1-vbtb"/><path class="k-dy_gbdp"/><path class="catopm8pb"/>`,
		"fallback": "selfhst:tor",
	});
}

export default Component;
