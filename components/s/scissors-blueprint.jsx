import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wpyxkzbkr.css';
import '../../css/i/ij5xpgxlr.css';
import '../../css/g/goo9dshtt.css';
import '../../css/z/z8hhzrb0o.css';
import '../../css/g/gh850ugvl.css';
import '../../css/h/hd185ebjo.css';
import '../../css/n/n3mv34aei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wpyxkzbkr"/><path class="ij5xpgxlr wm-deco"/><path class="goo9dshtt wm-deco"/><path class="wm-k z8hhzrb0o"/><path class="gh850ugvl wm-a"/><path class="hd185ebjo wm-k"/><path class="n3mv34aei wm-a"/></g>`,
		"fallback": "withicons:scissors-blueprint",
	});
}

export default Component;
