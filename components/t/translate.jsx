import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/lwvnupu0w.css';
import '../../css/s/sz4y6bb3f.css';
import '../../css/z/zmpl4x5yw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="lwvnupu0w"/><path class="sz4y6bb3f"/><path class="zmpl4x5yw"/></g>`,
		"fallback": "marketeq:translate",
	});
}

export default Component;
