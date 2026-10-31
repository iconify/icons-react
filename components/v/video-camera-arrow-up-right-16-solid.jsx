import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzdv_vtcl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bzdv_vtcl"/>`,
		"fallback": "sidekickicons:video-camera-arrow-up-right-16-solid",
	});
}

export default Component;
