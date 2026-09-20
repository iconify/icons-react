import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bttz41b-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bttz41b-g"/>`,
		"fallback": "uiw:plus",
	});
}

export default Component;
