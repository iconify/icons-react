import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r7x5le_dt.css';
import '../../css/n/n89723b9p.css';
import '../../css/h/h5p8ekb5t.css';
import '../../css/y/y1jy8bf4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r7x5le_dt"/><path class="n89723b9p"/><path class="h5p8ekb5t"/><path class="y1jy8bf4c"/></g>`,
		"fallback": "streamline-sharp-color:padlock-shield",
	});
}

export default Component;
