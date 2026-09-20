import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxti2cc2i.css';
import '../../css/j/j3c-dicsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxti2cc2i"/><path class="j3c-dicsz"/>`,
		"fallback": "selfhst:netlock-rmm",
	});
}

export default Component;
