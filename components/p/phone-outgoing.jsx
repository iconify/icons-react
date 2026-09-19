import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/f3-50ui7y.css';
import '../../css/p/pcrzkzk_h.css';
import '../../css/a/aguowybsh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="f3-50ui7y"/><path class="pcrzkzk_h"/><path class="aguowybsh"/></g>`,
		"fallback": "icon-park:phone-outgoing",
	});
}

export default Component;
