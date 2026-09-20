import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gtnq0_blo.css';
import '../../css/s/soscjabbn.css';
import '../../css/z/zijbwvhvx.css';
import '../../css/n/n-ytn4yme.css';
import '../../css/e/e1pdv8b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="gtnq0_blo"/><path class="soscjabbn"/><path class="zijbwvhvx"/><path class="n-ytn4yme"/><path class="e1pdv8b9f"/></g>`,
		"fallback": "streamline-sharp-color:slide-show-play",
	});
}

export default Component;
