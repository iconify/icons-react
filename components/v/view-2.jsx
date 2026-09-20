import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/iyv178b8t.css';
import '../../css/d/dgcj-rc-h.css';
import '../../css/p/pbavudbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="iyv178b8t"/><path class="dgcj-rc-h"/><path class="pbavudbas"/></g>`,
		"fallback": "streamline-cyber:view-2",
	});
}

export default Component;
