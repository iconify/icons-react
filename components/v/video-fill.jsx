import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvvy5xj8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvvy5xj8w"/>`,
		"fallback": "mage:video-fill",
	});
}

export default Component;
