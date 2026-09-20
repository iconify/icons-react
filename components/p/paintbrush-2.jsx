import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/temxgktfz.css';
import '../../css/l/lp9ck2b9a.css';
import '../../css/b/bv45nla0i.css';
import '../../css/e/ei-mh9a5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="temxgktfz"/><path class="lp9ck2b9a"/><path class="bv45nla0i"/><path class="ei-mh9a5r"/></g>`,
		"fallback": "streamline-plump-color:paintbrush-2",
	});
}

export default Component;
