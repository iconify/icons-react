import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3hl5yb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s3hl5yb0n"/>`,
		"fallback": "sidekickicons:video-camera-arrow-up-right-solid",
	});
}

export default Component;
