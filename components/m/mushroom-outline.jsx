import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g-roh6blq.css';
import '../../css/p/plb01ybpw.css';
import '../../css/v/v74qb470j.css';
import '../../css/r/risyq2_-f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g-roh6blq"/><path class="plb01ybpw"/><path class="v74qb470j"/><path class="risyq2_-f"/></g>`,
		"fallback": "glyphs:mushroom-outline",
	});
}

export default Component;
