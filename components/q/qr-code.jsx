import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f3iagebhn.css';
import '../../css/n/n7tximbqw.css';
import '../../css/g/gyya8zvic.css';
import '../../css/p/p9o4vvd7f.css';
import '../../css/h/h0yo7mbxe.css';
import '../../css/w/wsi42bsvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f3iagebhn wm-shadow"/><path class="n7tximbqw"/><path class="gyya8zvic"/><path class="p9o4vvd7f"/><path class="h0yo7mbxe"/><path class="wsi42bsvm"/></g>`,
		"fallback": "withicons-retro:qr-code",
	});
}

export default Component;
