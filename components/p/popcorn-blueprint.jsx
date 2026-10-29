import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xl6-b9z5z.css';
import '../../css/l/lqnpjyprv.css';
import '../../css/z/zeci0-bdr.css';
import '../../css/b/bdd8h_b8p.css';
import '../../css/b/bu-338b6q.css';
import '../../css/m/mb589nbqb.css';
import '../../css/j/jl-be6itq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xl6-b9z5z"/><path class="lqnpjyprv wm-deco"/><path class="wm-deco zeci0-bdr"/><path class="bdd8h_b8p wm-k"/><path class="bu-338b6q wm-a"/><path class="mb589nbqb wm-k"/><path class="jl-be6itq wm-a"/></g>`,
		"fallback": "withicons:popcorn-blueprint",
	});
}

export default Component;
