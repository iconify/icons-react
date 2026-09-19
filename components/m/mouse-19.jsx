import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/io1nfda-a.css';
import '../../css/i/ixwm5pqlj.css';
import '../../css/v/vtuln3fnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="io1nfda-a"/><path class="ixwm5pqlj"/><path class="vtuln3fnq"/></g>`,
		"fallback": "hugeicons:mouse-19",
	});
}

export default Component;
