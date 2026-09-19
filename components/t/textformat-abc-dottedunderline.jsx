import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w13tz1bif.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w13tz1bif"/>`,
		"fallback": "f7:textformat-abc-dottedunderline",
	});
}

export default Component;
