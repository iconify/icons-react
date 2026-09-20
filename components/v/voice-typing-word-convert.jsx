import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k3xl1pb3m.css';
import '../../css/v/v35haabhu.css';
import '../../css/w/wq_teud7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="k3xl1pb3m"/><path class="v35haabhu"/><path class="wq_teud7v"/></g>`,
		"fallback": "streamline-plump:voice-typing-word-convert",
	});
}

export default Component;
