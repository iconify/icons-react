import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md1qd5bmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md1qd5bmn"/>`,
		"fallback": "sidekickicons:password-pencil-16-solid",
	});
}

export default Component;
