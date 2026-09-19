import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz6sozb5l.css';
import '../../css/d/d6s6-cbpf.css';
import '../../css/c/cqty_1bzi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz6sozb5l"/><path class="d6s6-cbpf"/><path class="cqty_1bzi"/>`,
		"fallback": "ion:person-remove-outline",
	});
}

export default Component;
