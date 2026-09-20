import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bylbwoj8p.css';
import '../../css/i/ift3yubeo.css';
import '../../css/z/zvepp4dfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bylbwoj8p"/><path class="ift3yubeo"/><path class="zvepp4dfu"/></g>`,
		"fallback": "keyline-icons:panel-top-close-dashed-sharp-two-tone",
	});
}

export default Component;
