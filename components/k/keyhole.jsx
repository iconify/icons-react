import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egm_2b38y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egm_2b38y"/>`,
		"fallback": "pinhead:keyhole",
	});
}

export default Component;
