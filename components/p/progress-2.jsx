import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjoc32bjk.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjoc32bjk"/>`,
		"fallback": "websymbol:progress-2",
	});
}

export default Component;
