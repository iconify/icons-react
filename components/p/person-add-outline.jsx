import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz6sozb5l.css';
import '../../css/d/d6s6-cbpf.css';
import '../../css/o/omk86fbup.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz6sozb5l"/><path class="d6s6-cbpf"/><path class="omk86fbup"/>`,
		"fallback": "famicons:person-add-outline",
	});
}

export default Component;
