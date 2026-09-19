import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfdi-4buo.css';
import '../../css/t/tk4wqivch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfdi-4buo"/><path class="tk4wqivch"/>`,
		"fallback": "famicons:person-circle-outline",
	});
}

export default Component;
