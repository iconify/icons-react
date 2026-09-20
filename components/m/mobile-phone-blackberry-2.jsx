import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gmfx-9zfo.css';
import '../../css/m/mxy801zke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gmfx-9zfo"/><path class="mxy801zke"/></g>`,
		"fallback": "streamline-freehand:mobile-phone-blackberry-2",
	});
}

export default Component;
