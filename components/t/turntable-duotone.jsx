import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xabjk5bgz.css';
import '../../css/q/q050sk4js.css';
import '../../css/n/ncstsjbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xabjk5bgz"/><path class="q050sk4js"/><path class="ncstsjbou"/></g>`,
		"fallback": "lucide-extended:turntable-duotone",
	});
}

export default Component;
