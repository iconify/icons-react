import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp18n-bsn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp18n-bsn"/>`,
		"fallback": "pinhead:vending-machine-with-venus",
	});
}

export default Component;
