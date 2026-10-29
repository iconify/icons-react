import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m-enwbbfz.css';
import '../../css/n/n2ocleb-s.css';
import '../../css/f/f6_0b0b7v.css';
import '../../css/s/stmy9abca.css';
import '../../css/j/jtixgnbqs.css';
import '../../css/e/egxdvdb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="m-enwbbfz wm-deco"/><path class="n2ocleb-s wm-deco"/><path class="f6_0b0b7v wm-deco"/><path class="stmy9abca wm-k"/><path class="jtixgnbqs wm-a"/><path class="egxdvdb8r wm-k"/></g>`,
		"fallback": "withicons:thumbs-down-blueprint",
	});
}

export default Component;
