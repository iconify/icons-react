import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miqof0biz.css';
import '../../css/p/p-rfurwvz.css';

const viewBox = {"width":16,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miqof0biz"/><path class="p-rfurwvz"/>`,
		"fallback": "formkit:rewind",
	});
}

export default Component;
