import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3ux1061w.css';
import '../../css/d/dyii5ab_p.css';
import '../../css/k/kvy4ghbal.css';
import '../../css/e/eqh2q3bcc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3ux1061w"/><path class="dyii5ab_p"/><path class="kvy4ghbal"/><path class="eqh2q3bcc"/>`,
		"fallback": "energy-icons:smart-meter-20",
	});
}

export default Component;
