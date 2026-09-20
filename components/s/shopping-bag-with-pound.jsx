import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ril3z_bku.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ril3z_bku"/>`,
		"fallback": "pinhead:shopping-bag-with-pound",
	});
}

export default Component;
