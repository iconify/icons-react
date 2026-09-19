import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfyy1timd.css';
import '../../css/p/p7q2zbbrp.css';
import '../../css/s/s9yzznvaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfyy1timd"/><path class="p7q2zbbrp"/><path class="s9yzznvaf"/>`,
		"fallback": "bxl:tux",
	});
}

export default Component;
