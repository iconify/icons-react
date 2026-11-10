import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ur4tlhb7f.css';
import '../../css/o/om1x-cleu.css';
import '../../css/a/axeh-i51j.css';
import '../../css/x/x0idx2b_y.css';
import '../../css/n/nymwdbb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ur4tlhb7f"/><circle class="om1x-cleu"/><path class="axeh-i51j"/><path class="x0idx2b_y"/><path class="nymwdbb7g"/></g>`,
		"fallback": "andrsrxn:virus-off",
	});
}

export default Component;
