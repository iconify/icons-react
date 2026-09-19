import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekkzrib-j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekkzrib-j"/>`,
		"fallback": "heroicons:plus-16-solid",
	});
}

export default Component;
