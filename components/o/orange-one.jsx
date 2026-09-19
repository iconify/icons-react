import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/ls8s3cc1i.css';
import '../../css/b/bi881ebwa.css';
import '../../css/d/dz804iovd.css';
import '../../css/i/i1lm50b5r.css';
import '../../css/w/w7cjp73rt.css';
import '../../css/s/sfath8blt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ls8s3cc1i"/><path class="bi881ebwa"/><path class="dz804iovd"/><path class="i1lm50b5r"/><path class="w7cjp73rt"/><path class="sfath8blt"/></g>`,
		"fallback": "icon-park:orange-one",
	});
}

export default Component;
