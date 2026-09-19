import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lda3vs_wa.css';

const viewBox = {"width":717,"height":698};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lda3vs_wa"/>`,
		"fallback": "ls:smile",
	});
}

export default Component;
