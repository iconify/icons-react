import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s85a2nbxa.css';
import '../../css/m/mnmkzno2m.css';
import '../../css/w/wa-w08h6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s85a2nbxa"/><path class="mnmkzno2m"/><path class="wa-w08h6t"/></g>`,
		"fallback": "lucide-extended:paper-bag-duotone",
	});
}

export default Component;
