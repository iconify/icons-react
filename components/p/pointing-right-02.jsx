import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh1j0mb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh1j0mb6a"/>`,
		"fallback": "hugeicons:pointing-right-02",
	});
}

export default Component;
