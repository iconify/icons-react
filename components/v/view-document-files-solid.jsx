import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl1h7tboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kl1h7tboi"/>`,
		"fallback": "streamline-sharp:view-document-files-solid",
	});
}

export default Component;
