import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x3232dbkq.css';
import '../../css/d/dqs93qb0x.css';
import '../../css/e/erfydac2v.css';
import '../../css/l/lgov11kvf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x3232dbkq"/><path class="dqs93qb0x"/><path class="erfydac2v"/><path class="lgov11kvf"/></g>`,
		"fallback": "glyphs:save-1-outline",
	});
}

export default Component;
