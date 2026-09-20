import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ywyhfgcvz.css';
import '../../css/e/e2ev1xxew.css';
import '../../css/y/y79m9jnpc.css';
import '../../css/h/hoclqzbue.css';
import '../../css/o/o5k4d4bzw.css';
import '../../css/r/rv7gjhw2t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ywyhfgcvz"/><path class="e2ev1xxew"/><path class="y79m9jnpc"/><path class="hoclqzbue"/><path class="o5k4d4bzw"/><path class="rv7gjhw2t"/></g>`,
		"fallback": "radix-icons:shadow-outer",
	});
}

export default Component;
