import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbm58abcy.css';
import '../../css/p/p9eupo9br.css';
import '../../css/s/smehn_blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbm58abcy"/><path class="p9eupo9br"/><path class="smehn_blx"/></g>`,
		"fallback": "lucide-extended:step-forward-duotone",
	});
}

export default Component;
