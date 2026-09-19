import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rp1xwe1-z.css';
import '../../css/w/wi90qc0tn.css';
import '../../css/g/gjzxlrd4t.css';
import '../../css/f/f9a5_u-iz.css';
import '../../css/j/jce98cbsi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rp1xwe1-z"/><path class="wi90qc0tn"/><path class="gjzxlrd4t"/><path class="f9a5_u-iz"/><path class="jce98cbsi"/></g>`,
		"fallback": "pepicons:trophy",
	});
}

export default Component;
