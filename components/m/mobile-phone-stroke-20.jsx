import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9so18btn.css';
import '../../css/q/qlx4k6bgd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9so18btn"/><path class="qlx4k6bgd"/>`,
		"fallback": "garden:mobile-phone-stroke-20",
	});
}

export default Component;
