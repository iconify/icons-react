import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9p8olbup.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9p8olbup"/>`,
		"fallback": "f7:playpause",
	});
}

export default Component;
