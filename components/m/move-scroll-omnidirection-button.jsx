import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zen98fb0d.css';
import '../../css/s/sslbotpft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zen98fb0d"/><path class="sslbotpft"/></g>`,
		"fallback": "streamline-freehand-color:move-scroll-omnidirection-button",
	});
}

export default Component;
