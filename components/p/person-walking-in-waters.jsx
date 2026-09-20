import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jknwspb_t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jknwspb_t"/>`,
		"fallback": "pinhead:person-walking-in-waters",
	});
}

export default Component;
