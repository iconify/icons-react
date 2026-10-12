import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym-uxxb9p.css';
import '../../css/a/aor1mmhyl.css';
import '../../css/t/tavu7dgmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ym-uxxb9p"/><path class="aor1mmhyl"/><path class="tavu7dgmz"/></g>`,
		"fallback": "lucide-extended:umbrella-duotone",
	});
}

export default Component;
