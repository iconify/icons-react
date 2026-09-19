import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjyc-wb9r.css';
import '../../css/z/zjf4m5a8f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjyc-wb9r"/><path class="zjf4m5a8f"/></g>`,
		"fallback": "glyphs:microphone-1-duo",
	});
}

export default Component;
