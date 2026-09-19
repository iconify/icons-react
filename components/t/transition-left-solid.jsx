import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/b/br6_jsqjq.css';
import '../../css/r/roikk85_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="br6_jsqjq"/><path class="roikk85_n"/></g>`,
		"fallback": "iconoir:transition-left-solid",
	});
}

export default Component;
