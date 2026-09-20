import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/faf5xj6kl.css';
import '../../css/q/q9ihrubsj.css';
import '../../css/p/p17gl2bbl.css';
import '../../css/y/yewvgbhmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="faf5xj6kl"/><path class="q9ihrubsj"/><path class="p17gl2bbl"/><path class="yewvgbhmn"/></g>`,
		"fallback": "streamline-sharp-color:share-time",
	});
}

export default Component;
