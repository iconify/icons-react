import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/b/bxbtl1b7w.css';
import '../../css/i/ii51yubpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="bxbtl1b7w"/><path class="ii51yubpc"/>`,
		"fallback": "fontisto:smiley",
	});
}

export default Component;
