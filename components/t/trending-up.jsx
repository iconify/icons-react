import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/binil8b-i.css';
import '../../css/q/qv-bz92zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="binil8b-i"/><path class="qv-bz92zv"/>`,
		"fallback": "withicons-bauhaus:trending-up",
	});
}

export default Component;
