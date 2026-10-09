import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axe2cvbgc.css';
import '../../css/g/gyk-hu6jj.css';
import '../../css/k/kf-alwfzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axe2cvbgc"/><path class="gyk-hu6jj"/><path class="kf-alwfzw"/>`,
		"fallback": "energy-icons:lng-ship-48-bold",
	});
}

export default Component;
