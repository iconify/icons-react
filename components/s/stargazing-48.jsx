import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blpec2f_v.css';
import '../../css/p/pwrb__blp.css';
import '../../css/g/g1qd2ab1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blpec2f_v"/><path class="pwrb__blp"/><path class="g1qd2ab1h"/>`,
		"fallback": "energy-icons:stargazing-48",
	});
}

export default Component;
