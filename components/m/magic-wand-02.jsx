import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-t2gnbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-t2gnbbo"/>`,
		"fallback": "hugeicons:magic-wand-02",
	});
}

export default Component;
