import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/d2ivtpbat.css';
import '../../css/p/ptxldtbxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="d2ivtpbat"/><path class="ptxldtbxo"/></g>`,
		"fallback": "icon-park:vip",
	});
}

export default Component;
