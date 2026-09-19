import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edoc9w87l.css';

const viewBox = {"width":472,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edoc9w87l"/>`,
		"fallback": "ps:pingchat",
	});
}

export default Component;
