import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2axamk9n.css';
import '../../css/k/k9eyo1h_u.css';
import '../../css/a/amfdxgb4w.css';
import '../../css/q/q79nj4brv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="p2axamk9n"/><circle class="k9eyo1h_u"/><path class="amfdxgb4w"/><path class="q79nj4brv"/></g>`,
		"fallback": "icon-park:shopping-cart-one",
	});
}

export default Component;
