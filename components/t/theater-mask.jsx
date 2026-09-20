import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xebj6eb0c.css';
import '../../css/b/b1odrst1c.css';
import '../../css/l/l7cu3lb6i.css';
import '../../css/n/nhgkhxbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xebj6eb0c"/><path class="b1odrst1c"/><path class="l7cu3lb6i"/><path class="nhgkhxbnb"/></g>`,
		"fallback": "streamline-sharp-color:theater-mask",
	});
}

export default Component;
