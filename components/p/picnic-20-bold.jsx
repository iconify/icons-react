import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfg1m8b6f.css';
import '../../css/w/wtom3hs6k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfg1m8b6f"/><path class="wtom3hs6k"/>`,
		"fallback": "energy-icons:picnic-20-bold",
	});
}

export default Component;
