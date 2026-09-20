import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iivd7pi3b.css';
import '../../css/f/f7d7ahljl.css';
import '../../css/b/bnak6ac7v.css';
import '../../css/e/eywv98bfn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="iivd7pi3b"/><path class="f7d7ahljl"/><path class="bnak6ac7v"/><path class="eywv98bfn"/></g>`,
		"fallback": "streamline-plump-color:tag-alt",
	});
}

export default Component;
