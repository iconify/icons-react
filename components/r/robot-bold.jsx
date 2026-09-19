import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veqd807dt.css';
import '../../css/t/tyhxbenkf.css';
import '../../css/q/qy8haab0a.css';
import '../../css/y/yfya-zbtz.css';
import '../../css/d/dh4-8zbhw.css';
import '../../css/k/kxwc09z8q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="veqd807dt"/><path clip-rule="evenodd" class="tyhxbenkf"/><rect class="qy8haab0a"/><path clip-rule="evenodd" class="yfya-zbtz"/><path class="dh4-8zbhw"/><rect class="kxwc09z8q"/></g>`,
		"fallback": "glyphs:robot-bold",
	});
}

export default Component;
