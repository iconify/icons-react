import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywimt5b1o.css';
import '../../css/c/cyo4yw9bp.css';
import '../../css/w/wv2mlgdyl.css';
import '../../css/n/niphly_2u.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywimt5b1o"/><path class="cyo4yw9bp"/><path class="wv2mlgdyl"/><path class="niphly_2u"/>`,
		"fallback": "material-icon-theme:restql",
	});
}

export default Component;
