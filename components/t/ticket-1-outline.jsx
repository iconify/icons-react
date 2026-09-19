import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jqs04xbzn.css';
import '../../css/s/s2m1y1bld.css';
import '../../css/w/w3thj6b5k.css';
import '../../css/q/qvosn3u-g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jqs04xbzn"/><path class="s2m1y1bld"/><path class="w3thj6b5k"/><path class="qvosn3u-g"/></g>`,
		"fallback": "glyphs:ticket-1-outline",
	});
}

export default Component;
