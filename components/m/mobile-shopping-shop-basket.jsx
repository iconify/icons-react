import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r8es29b3x.css';
import '../../css/o/ocf4kgbyt.css';
import '../../css/t/tb84h-beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r8es29b3x"/><path class="ocf4kgbyt"/><path class="tb84h-beb"/></g>`,
		"fallback": "streamline-freehand:mobile-shopping-shop-basket",
	});
}

export default Component;
