import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm_i66_ym.css';
import '../../css/o/ojwmqkoww.css';
import '../../css/x/xrhdcypyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm_i66_ym"/><path class="ojwmqkoww"/><path class="xrhdcypyq"/>`,
		"fallback": "gcp:persistent-disk",
	});
}

export default Component;
