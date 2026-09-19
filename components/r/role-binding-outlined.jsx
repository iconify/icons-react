import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b03zqx2zz.css';
import '../../css/h/h6r-0zwfg.css';
import '../../css/i/iu9qj1lar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b03zqx2zz"/><path class="h6r-0zwfg"/><path class="iu9qj1lar"/>`,
		"fallback": "eos-icons:role-binding-outlined",
	});
}

export default Component;
