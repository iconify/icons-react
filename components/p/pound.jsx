import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/b/bkpb9nbrp.css';
import '../../css/t/t47_ldbyv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="bkpb9nbrp"/><path class="t47_ldbyv"/>`,
		"fallback": "formkit:pound",
	});
}

export default Component;
