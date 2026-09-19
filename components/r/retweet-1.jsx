import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzw170b2l.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzw170b2l"/>`,
		"fallback": "ps:retweet-1",
	});
}

export default Component;
