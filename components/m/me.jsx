import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s0379ecdo.css';
import '../../css/z/z2g9mzbpt.css';
import '../../css/n/n62_pvwdn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="s0379ecdo"/><path class="z2g9mzbpt"/><path class="n62_pvwdn"/></g>`,
		"fallback": "icon-park:me",
	});
}

export default Component;
