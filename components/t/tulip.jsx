import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nciw18bnl.css';
import '../../css/e/ea-9_qb1k.css';
import '../../css/s/six2vl78a.css';
import '../../css/d/dsv5f4doq.css';
import '../../css/a/a_hpkd7zk.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n6k_b5b3m.css';
import '../../css/l/lwegruerl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nciw18bnl"/><path class="ea-9_qb1k"/><path class="six2vl78a"/><path class="dsv5f4doq"/><path class="a_hpkd7zk"/><g class="jn8qy4bru"><path class="n6k_b5b3m"/><path class="lwegruerl"/></g>`,
		"fallback": "openmoji:tulip",
	});
}

export default Component;
