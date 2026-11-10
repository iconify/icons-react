import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp1ojc_zq.css';
import '../../css/n/nucjxzbql.css';
import '../../css/u/uz5m12bll.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp1ojc_zq"/><path class="nucjxzbql"/><path class="uz5m12bll"/>`,
		"fallback": "devicon:nginx-wordmark",
	});
}

export default Component;
