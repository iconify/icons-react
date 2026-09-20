import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py8_zzozw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py8_zzozw"/>`,
		"fallback": "maki:residential-community",
	});
}

export default Component;
