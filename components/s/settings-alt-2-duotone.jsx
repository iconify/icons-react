import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2vjo2bea.css';
import '../../css/s/su32efb5p.css';
import '../../css/a/af6c2lt3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f2vjo2bea"/><path class="su32efb5p"/><path class="af6c2lt3u"/></g>`,
		"fallback": "si:settings-alt-2-duotone",
	});
}

export default Component;
