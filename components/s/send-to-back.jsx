import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lm1qn4__m.css';
import '../../css/z/z1-4sdbgn.css';
import '../../css/g/gmocnou7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="lm1qn4__m"/><rect class="z1-4sdbgn"/><path class="gmocnou7h"/></g>`,
		"fallback": "lucide:send-to-back",
	});
}

export default Component;
