import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu2zzwf5c.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu2zzwf5c"/>`,
		"fallback": "fontisto:quote-a-right",
	});
}

export default Component;
