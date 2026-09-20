import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/szel5gblr.css';
import '../../css/t/t4s2asznb.css';
import '../../css/g/gb-hbngty.css';
import '../../css/f/fiu-ndpeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="szel5gblr"/><path class="t4s2asznb"/><path class="gb-hbngty"/><path class="fiu-ndpeh"/></g>`,
		"fallback": "streamline-sharp-color:medical-folder",
	});
}

export default Component;
