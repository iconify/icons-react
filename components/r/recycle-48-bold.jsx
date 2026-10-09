import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otb2xbb3k.css';
import '../../css/p/pkdwskbpr.css';
import '../../css/g/g1mzogb6g.css';
import '../../css/d/da0i6bcpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otb2xbb3k"/><path class="pkdwskbpr"/><path class="g1mzogb6g"/><path class="da0i6bcpf"/>`,
		"fallback": "energy-icons:recycle-48-bold",
	});
}

export default Component;
