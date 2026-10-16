import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg5m1db1h.css';
import '../../css/a/a2j6mnb-l.css';

const viewBox = {"width":608.3,"height":608.3,"left":-17.2,"top":-28.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg5m1db1h"/><path class="a2j6mnb-l"/>`,
		"fallback": "thesvg-color:pinchflat",
	});
}

export default Component;
