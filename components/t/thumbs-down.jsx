import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kio4hsg7t.css';
import '../../css/n/nljnanbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kio4hsg7t wm-a"/><path class="nljnanbsb wm-k"/>`,
		"fallback": "withicons-bauhaus:thumbs-down",
	});
}

export default Component;
