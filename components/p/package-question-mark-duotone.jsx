import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_pe0sbpw.css';
import '../../css/n/nby40cd0q.css';
import '../../css/l/l7ocqgb5a.css';
import '../../css/n/nwe4nxbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_pe0sbpw"/><path class="nby40cd0q"/><path class="l7ocqgb5a"/><path class="nwe4nxbih"/></g>`,
		"fallback": "lucide-extended:package-question-mark-duotone",
	});
}

export default Component;
