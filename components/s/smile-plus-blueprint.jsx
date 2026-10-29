import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t0nb--mdy.css';
import '../../css/t/t5ukvhnmj.css';
import '../../css/z/z972s-b0h.css';
import '../../css/c/cp52aoeub.css';
import '../../css/s/sl7siidbt.css';
import '../../css/z/z4fg99pfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t0nb--mdy wm-deco"/><path class="t5ukvhnmj wm-deco"/><path class="wm-deco z972s-b0h"/><path class="cp52aoeub wm-k"/><path class="sl7siidbt wm-a"/><path class="wm-s z4fg99pfy"/></g>`,
		"fallback": "withicons:smile-plus-blueprint",
	});
}

export default Component;
