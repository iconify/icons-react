import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6ohxsygm.css';
import '../../css/l/lrkz-mbtc.css';
import '../../css/a/a4hjqmbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6ohxsygm"/><path class="lrkz-mbtc"/><path class="a4hjqmbpb"/></g>`,
		"fallback": "streamline-ultimate-color:stairs-descend",
	});
}

export default Component;
