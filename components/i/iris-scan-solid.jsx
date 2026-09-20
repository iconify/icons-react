import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1yu04b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1yu04b5s"/>`,
		"fallback": "streamline-sharp:iris-scan-solid",
	});
}

export default Component;
