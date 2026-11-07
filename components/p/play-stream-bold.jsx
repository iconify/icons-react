import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayzb5ccgl.css';
import '../../css/s/sdtufnbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ayzb5ccgl"/><path class="sdtufnbpd"/>`,
		"fallback": "solar:play-stream-bold",
	});
}

export default Component;
