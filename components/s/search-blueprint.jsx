import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m-lwn2brr.css';
import '../../css/p/puqrdv9_n.css';
import '../../css/b/bxjv56brc.css';
import '../../css/x/xa_7bib3n.css';
import '../../css/e/em2cp10id.css';
import '../../css/e/eyejxqbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="m-lwn2brr wm-deco"/><path class="puqrdv9_n wm-deco"/><path class="bxjv56brc wm-deco"/><path class="wm-k xa_7bib3n"/><path class="em2cp10id wm-a"/><path class="eyejxqbhe wm-a"/></g>`,
		"fallback": "withicons:search-blueprint",
	});
}

export default Component;
