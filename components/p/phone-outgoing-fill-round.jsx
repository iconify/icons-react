import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf9hg6x8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf9hg6x8w"/>`,
		"fallback": "coolicons:phone-outgoing-fill-round",
	});
}

export default Component;
