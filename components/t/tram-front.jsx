import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/smw8xmqtj.css';
import '../../css/l/ly3wpy45t.css';
import '../../css/z/zzopqyboz.css';
import '../../css/n/nr7gnttmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="smw8xmqtj"/><path class="ly3wpy45t"/><path class="zzopqyboz"/><path class="nr7gnttmf"/></g>`,
		"fallback": "hugeicons:tram-front",
	});
}

export default Component;
