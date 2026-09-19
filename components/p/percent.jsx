import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g54yjpf3n.css';
import '../../css/n/nupiyuvfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g54yjpf3n"/><path class="nupiyuvfj"/></g>`,
		"fallback": "hugeicons:percent",
	});
}

export default Component;
