import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnc0f53hn.css';
import '../../css/f/frfm2sm4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rnc0f53hn"/><path class="frfm2sm4s"/>`,
		"fallback": "lets-icons:upload-fill",
	});
}

export default Component;
