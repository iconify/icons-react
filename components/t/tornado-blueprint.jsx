import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zmxobqbxk.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/d/dfa4tmbvu.css';
import '../../css/s/smy6rvbml.css';
import '../../css/a/ao7apwbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zmxobqbxk"/><path class="o7-ag87sb wm-deco"/><path class="dfa4tmbvu wm-k"/><path class="smy6rvbml wm-a"/><path class="ao7apwbgn wm-a"/></g>`,
		"fallback": "withicons:tornado-blueprint",
	});
}

export default Component;
