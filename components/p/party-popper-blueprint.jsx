import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s2uza_ixb.css';
import '../../css/a/a1o8ly8eq.css';
import '../../css/z/zickbgbqk.css';
import '../../css/s/sk3wpjbbr.css';
import '../../css/r/r800bg3-r.css';
import '../../css/y/ymiw1l41d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s2uza_ixb wm-deco"/><path class="a1o8ly8eq wm-deco"/><path class="wm-deco zickbgbqk"/><path class="sk3wpjbbr wm-k"/><path class="r800bg3-r wm-a"/><path class="wm-s ymiw1l41d"/></g>`,
		"fallback": "withicons:party-popper-blueprint",
	});
}

export default Component;
