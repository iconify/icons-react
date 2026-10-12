import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s41azxbgg.css';
import '../../css/y/y9qo_5b3l.css';
import '../../css/g/glslupcha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s41azxbgg"/><path class="y9qo_5b3l"/><path class="glslupcha"/></g>`,
		"fallback": "lucide-extended:squares-subtract-duotone",
	});
}

export default Component;
