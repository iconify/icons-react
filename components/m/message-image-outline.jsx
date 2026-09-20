import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-m7ju5pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-m7ju5pd"/>`,
		"fallback": "mdi:message-image-outline",
	});
}

export default Component;
