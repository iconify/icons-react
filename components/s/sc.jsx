import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/womlb45uf.css';
import '../../css/b/b-617bbup.css';
import '../../css/o/omdej3b8w.css';
import '../../css/t/tagrfhtdd.css';
import '../../css/t/tr0gefsln.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="womlb45uf"/><path class="b-617bbup"/><path class="omdej3b8w"/><path class="tagrfhtdd"/><path class="tr0gefsln"/></g>`,
		"fallback": "cif:sc",
	});
}

export default Component;
