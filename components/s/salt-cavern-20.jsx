import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-ovh_4-p.css';
import '../../css/j/jst_e4bic.css';
import '../../css/q/q9zua8b1c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-ovh_4-p"/><path class="jst_e4bic"/><path class="q9zua8b1c"/>`,
		"fallback": "energy-icons:salt-cavern-20",
	});
}

export default Component;
