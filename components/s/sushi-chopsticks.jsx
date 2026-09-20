import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zrjfcpy9k.css';
import '../../css/q/q1tpt7fzn.css';
import '../../css/l/lh3843bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zrjfcpy9k"/><path class="q1tpt7fzn"/><path class="lh3843bbm"/></g>`,
		"fallback": "lucide-lab:sushi-chopsticks",
	});
}

export default Component;
