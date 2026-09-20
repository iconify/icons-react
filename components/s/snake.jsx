import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2nhrni-v.css';
import '../../css/a/az532d-fz.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/qdzbtslrm.css';
import '../../css/r/rkh9jmd8r.css';
import '../../css/m/muedlcc7n.css';
import '../../css/h/h8810e80n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2nhrni-v"/><path class="az532d-fz"/><g class="z04drlb1l"><path class="qdzbtslrm"/><path class="rkh9jmd8r"/><path class="muedlcc7n"/><path class="h8810e80n"/></g>`,
		"fallback": "openmoji:snake",
	});
}

export default Component;
