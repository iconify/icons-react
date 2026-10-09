import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2v7xkiqi.css';
import '../../css/e/egxp91bbt.css';
import '../../css/a/agzo0q31v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2v7xkiqi"/><path class="egxp91bbt"/><path class="agzo0q31v"/>`,
		"fallback": "energy-icons:solar-meter-20-bold",
	});
}

export default Component;
