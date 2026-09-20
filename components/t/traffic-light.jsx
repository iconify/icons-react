import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mf00s901q.css';
import '../../css/u/u-hkfmxng.css';
import '../../css/u/ur2-_1rdr.css';
import '../../css/f/f7o969gee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mf00s901q"/><path class="u-hkfmxng"/><path class="ur2-_1rdr"/><path class="f7o969gee"/></g>`,
		"fallback": "streamline-sharp-color:traffic-light",
	});
}

export default Component;
