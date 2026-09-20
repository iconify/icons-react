import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgxqd4air.css';
import '../../css/z/zczqr0djk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgxqd4air"/><path class="zczqr0djk"/>`,
		"fallback": "ooui:journal-ltr",
	});
}

export default Component;
