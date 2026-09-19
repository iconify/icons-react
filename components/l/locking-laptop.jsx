import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/e8jxhdczm.css';
import '../../css/n/ndtovtbdh.css';
import '../../css/z/z5pl6n_8y.css';
import '../../css/a/aox-enbea.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="e8jxhdczm"/><path class="ndtovtbdh"/><rect class="z5pl6n_8y"/><path class="aox-enbea"/></g>`,
		"fallback": "icon-park-solid:locking-laptop",
	});
}

export default Component;
