import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/b/bvc9tg82w.css';
import '../../css/i/ir-_s_bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="bvc9tg82w"/><path class="ir-_s_bso"/></g>`,
		"fallback": "si:projects-duotone",
	});
}

export default Component;
