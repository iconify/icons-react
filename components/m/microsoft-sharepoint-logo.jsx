import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aiwtk8anj.css';
import '../../css/n/nlfkj4bba.css';
import '../../css/p/p11u98kit.css';
import '../../css/n/nt93-ac0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="aiwtk8anj"/><path class="nlfkj4bba"/><path class="p11u98kit"/><path class="nt93-ac0b"/></g>`,
		"fallback": "streamline-logos:microsoft-sharepoint-logo",
	});
}

export default Component;
