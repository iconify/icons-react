import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9qmy2bro.css';
import '../../css/x/xbe1ae31o.css';
import '../../css/o/o0b52w97m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9qmy2bro"/><path class="xbe1ae31o"/><path class="o0b52w97m"/>`,
		"fallback": "energy-icons:wand-48",
	});
}

export default Component;
