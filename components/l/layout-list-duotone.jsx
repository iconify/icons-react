import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbp5-zmse.css';
import '../../css/f/fpv1krh2n.css';
import '../../css/s/s_-5-2nde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbp5-zmse"/><path class="fpv1krh2n"/><path class="s_-5-2nde"/></g>`,
		"fallback": "lucide-extended:layout-list-duotone",
	});
}

export default Component;
