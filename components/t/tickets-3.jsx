import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ro5bbhu.css';
import '../../css/c/ck3x9ggdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3ro5bbhu"/><path clip-rule="evenodd" class="ck3x9ggdl"/>`,
		"fallback": "lineicons:tickets-3",
	});
}

export default Component;
