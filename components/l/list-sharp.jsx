import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxtqtcnph.css';
import '../../css/f/foequfu6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxtqtcnph"/><path class="foequfu6d"/>`,
		"fallback": "famicons:list-sharp",
	});
}

export default Component;
