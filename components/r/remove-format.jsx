import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec-h0tbtl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec-h0tbtl"/>`,
		"fallback": "nimbus:remove-format",
	});
}

export default Component;
