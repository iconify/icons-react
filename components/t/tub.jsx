import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/k/k2-5ysdjd.css';
import '../../css/s/sr2t4_oxt.css';
import '../../css/k/k9kqlacbd.css';
import '../../css/y/yml010bne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="k2-5ysdjd"/><path class="sr2t4_oxt"/><path class="k9kqlacbd"/><path class="yml010bne"/></g>`,
		"fallback": "icon-park-solid:tub",
	});
}

export default Component;
