import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqzm5abuz.css';

const viewBox = {"width":256,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqzm5abuz"/>`,
		"fallback": "ps:newsvine",
	});
}

export default Component;
