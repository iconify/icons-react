import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aea866bch.css';
import '../../css/v/vbj9b3b9v.css';
import '../../css/k/kmkesyb1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aea866bch"/><path class="vbj9b3b9v"/><path class="kmkesyb1b"/>`,
		"fallback": "fxemoji:pisces",
	});
}

export default Component;
