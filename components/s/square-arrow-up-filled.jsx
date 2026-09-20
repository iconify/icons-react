import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkyej1bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkyej1bku"/>`,
		"fallback": "tabler:square-arrow-up-filled",
	});
}

export default Component;
