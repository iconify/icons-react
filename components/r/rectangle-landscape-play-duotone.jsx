import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt86k5xbe.css';
import '../../css/i/i3jxg4b6g.css';
import '../../css/u/ugd6x5rii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kt86k5xbe"/><path class="i3jxg4b6g"/><path clip-rule="evenodd" class="ugd6x5rii"/></g>`,
		"fallback": "lucide-extended:rectangle-landscape-play-duotone",
	});
}

export default Component;
