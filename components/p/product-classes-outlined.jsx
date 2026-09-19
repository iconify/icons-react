import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egw0_e_yk.css';
import '../../css/g/grhwfqo-l.css';
import '../../css/u/uxmpfhdsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="egw0_e_yk"/><path class="grhwfqo-l"/><path class="uxmpfhdsy"/>`,
		"fallback": "eos-icons:product-classes-outlined",
	});
}

export default Component;
