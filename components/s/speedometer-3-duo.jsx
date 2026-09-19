import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_5je2bdi.css';
import '../../css/d/dmxtwacpa.css';
import '../../css/o/ofb6srb-u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_5je2bdi"/><path class="dmxtwacpa"/><path class="ofb6srb-u"/></g>`,
		"fallback": "glyphs:speedometer-3-duo",
	});
}

export default Component;
