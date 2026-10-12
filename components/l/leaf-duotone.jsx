import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/km1422x5w.css';
import '../../css/g/g6mvoib5l.css';
import '../../css/x/xt-_svb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="km1422x5w"/><path class="g6mvoib5l"/><path class="xt-_svb3m"/></g>`,
		"fallback": "lucide-extended:leaf-duotone",
	});
}

export default Component;
