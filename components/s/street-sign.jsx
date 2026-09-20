import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/jygq7yblj.css';
import '../../css/o/o-jj-xa3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="jygq7yblj"/><path class="o-jj-xa3k"/></g>`,
		"fallback": "streamline-sharp-color:street-sign",
	});
}

export default Component;
