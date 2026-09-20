import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b96v0mbje.css';
import '../../css/x/xo-h05v-v.css';
import '../../css/q/qyu547bwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="b96v0mbje"/><path class="xo-h05v-v"/><path class="qyu547bwr"/></g>`,
		"fallback": "streamline-plump:recycle-bin",
	});
}

export default Component;
