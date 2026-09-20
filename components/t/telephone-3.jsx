import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g8gqpnw_f.css';
import '../../css/h/h-kv87bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g8gqpnw_f"/><path class="h-kv87bkk"/></g>`,
		"fallback": "lineicons:telephone-3",
	});
}

export default Component;
