import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv6ayqbyv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv6ayqbyv"/>`,
		"fallback": "icomoon-free:list-numbered",
	});
}

export default Component;
