import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enmgbzdoq.css';
import '../../css/l/l7ocqgb5a.css';
import '../../css/v/v0ov3-z4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="enmgbzdoq"/><path class="l7ocqgb5a"/><path class="v0ov3-z4z"/></g>`,
		"fallback": "lucide-extended:package-search-duotone",
	});
}

export default Component;
