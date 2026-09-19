import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aisklebme.css';
import '../../css/z/z6pi86s9p.css';
import '../../css/p/p_7ey5koq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="aisklebme"/><path class="z6pi86s9p"/><path class="p_7ey5koq"/>`,
		"fallback": "ion:radio-outline",
	});
}

export default Component;
