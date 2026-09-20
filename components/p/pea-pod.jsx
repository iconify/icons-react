import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epsa87byr.css';
import '../../css/s/s8boht4xl.css';
import '../../css/w/wn-klgbrd.css';
import '../../css/e/e7y9eccbp.css';
import '../../css/a/aczm8u3zz.css';
import '../../css/k/kjqma5b_i.css';
import '../../css/b/bul0aac4e.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/ib5l381-q.css';
import '../../css/g/gt8f_s9xg.css';
import '../../css/l/lva2qsbol.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="epsa87byr"/><circle class="s8boht4xl"/><circle class="wn-klgbrd"/><g class="e7y9eccbp"><path class="aczm8u3zz"/><path class="kjqma5b_i"/></g><path class="bul0aac4e"/><g class="jn8qy4bru"><path class="ib5l381-q"/><path class="gt8f_s9xg"/><path class="lva2qsbol"/></g>`,
		"fallback": "openmoji:pea-pod",
	});
}

export default Component;
