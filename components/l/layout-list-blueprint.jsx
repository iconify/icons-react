import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cmj9i73hd.css';
import '../../css/n/nge5cfbll.css';
import '../../css/o/or3gi1b5y.css';
import '../../css/k/kk0fjtbcv.css';
import '../../css/w/wkhticbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cmj9i73hd wm-deco"/><path class="nge5cfbll wm-deco"/><path class="or3gi1b5y wm-k"/><path class="kk0fjtbcv wm-a"/><path class="wkhticbiw wm-a"/></g>`,
		"fallback": "withicons:layout-list-blueprint",
	});
}

export default Component;
