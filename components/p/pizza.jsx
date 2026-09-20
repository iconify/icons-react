import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/ptfsnvbxb.css';
import '../../css/l/lfrhepbcu.css';
import '../../css/k/kmff4wbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ptfsnvbxb"/><path class="lfrhepbcu"/><path class="kmff4wbxd"/></g>`,
		"fallback": "streamline-cyber:pizza",
	});
}

export default Component;
