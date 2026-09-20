import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu86w64jf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu86w64jf"/>`,
		"fallback": "pinhead:oc-text-above-caption",
	});
}

export default Component;
