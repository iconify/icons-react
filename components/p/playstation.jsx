import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imxv1m5kb.css';
import '../../css/t/t8iobcbuq.css';
import '../../css/l/l0krix3kz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imxv1m5kb"/><path class="t8iobcbuq"/><path class="l0krix3kz"/>`,
		"fallback": "ion:playstation",
	});
}

export default Component;
