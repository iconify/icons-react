import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv7os6knc.css';
import '../../css/x/x8o3q-boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv7os6knc"/><path class="x8o3q-boh"/>`,
		"fallback": "withicons-bauhaus:triangle",
	});
}

export default Component;
