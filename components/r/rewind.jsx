import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxonx6bxn.css';
import '../../css/g/gu-ybwb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxonx6bxn"/><path class="gu-ybwb-c"/>`,
		"fallback": "withicons-bauhaus:rewind",
	});
}

export default Component;
