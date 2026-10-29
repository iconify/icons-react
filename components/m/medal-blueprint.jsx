import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/o7ae53gjz.css';
import '../../css/i/i-_p9vb3j.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/b/bzz7kvuas.css';
import '../../css/x/x_2tefblp.css';
import '../../css/r/r0g02hz7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="o7ae53gjz wm-deco"/><path class="i-_p9vb3j wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="bzz7kvuas wm-k"/><path class="wm-a x_2tefblp"/><path class="r0g02hz7b wm-a"/></g>`,
		"fallback": "withicons:medal-blueprint",
	});
}

export default Component;
