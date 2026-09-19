import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c77bytqov.css';
import '../../css/b/bvn-2db2g.css';
import '../../css/d/dvlkv87yt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c77bytqov"/><path class="bvn-2db2g"/><path class="dvlkv87yt"/></g>`,
		"fallback": "bi:pci-card-network",
	});
}

export default Component;
