import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzt09qmjr.css';
import '../../css/m/mk_7xnb6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzt09qmjr"/><path class="mk_7xnb6t"/>`,
		"fallback": "selfhst:perfice-dark",
	});
}

export default Component;
