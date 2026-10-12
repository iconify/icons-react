import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz1zm2bdm.css';
import '../../css/i/iidqvbcem.css';
import '../../css/w/wk97p5bdt.css';
import '../../css/b/b9k9m9mqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz1zm2bdm"/><path class="iidqvbcem"/><path class="wk97p5bdt"/><path class="b9k9m9mqc"/></g>`,
		"fallback": "lucide-extended:package-open-duotone",
	});
}

export default Component;
