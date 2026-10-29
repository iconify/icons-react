import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yiqh8yb1e.css';
import '../../css/t/tlu2axhcd.css';
import '../../css/n/nqwgjqbun.css';
import '../../css/z/zz-4-abbe.css';
import '../../css/a/a8-kfs6dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yiqh8yb1e"/><path class="tlu2axhcd wm-deco"/><path class="nqwgjqbun wm-deco"/><path class="zz-4-abbe"/><path class="a8-kfs6dt"/></g>`,
		"fallback": "withicons:navigation-2-blueprint",
	});
}

export default Component;
