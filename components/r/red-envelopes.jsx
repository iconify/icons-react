import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/c4eeuxbpr.css';
import '../../css/g/g2owpxb-t.css';
import '../../css/l/lmfq34bbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="c4eeuxbpr"/><path class="g2owpxb-t"/><path class="lmfq34bbb"/></g>`,
		"fallback": "icon-park:red-envelopes",
	});
}

export default Component;
