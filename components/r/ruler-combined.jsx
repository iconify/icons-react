import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbtv_rbic.css';
import '../../css/e/ea8if3c8i.css';
import '../../css/m/mgzrqm6_d.css';
import '../../css/k/kat0eym1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbtv_rbic"/><path class="ea8if3c8i"/><path class="mgzrqm6_d"/><path class="kat0eym1m"/>`,
		"fallback": "uim:ruler-combined",
	});
}

export default Component;
