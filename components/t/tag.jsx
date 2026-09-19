import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paef-ikde.css';
import '../../css/o/o04e0f4tg.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paef-ikde"/><circle class="o04e0f4tg"/>`,
		"fallback": "formkit:tag",
	});
}

export default Component;
