import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igo_o-d5w.css';
import '../../css/d/dnmne6b8u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igo_o-d5w"/><path class="dnmne6b8u"/>`,
		"fallback": "carbon:time",
	});
}

export default Component;
