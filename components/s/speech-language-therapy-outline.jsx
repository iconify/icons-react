import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a91h8ub7n.css';
import '../../css/t/to3u92ahr.css';
import '../../css/w/whactg1he.css';
import '../../css/o/oplpwc_ov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a91h8ub7n"/><path class="to3u92ahr"/><path clip-rule="evenodd" class="whactg1he"/><path clip-rule="evenodd" class="oplpwc_ov"/></g>`,
		"fallback": "healthicons:speech-language-therapy-outline",
	});
}

export default Component;
