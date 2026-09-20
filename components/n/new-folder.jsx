import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/szel5gblr.css';
import '../../css/g/gb-hbngty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="szel5gblr"/><path class="gb-hbngty"/></g>`,
		"fallback": "streamline-sharp-color:new-folder",
	});
}

export default Component;
