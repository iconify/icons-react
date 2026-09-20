import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srkos7aaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="srkos7aaf"/>`,
		"fallback": "streamline-sharp:share-link-solid",
	});
}

export default Component;
