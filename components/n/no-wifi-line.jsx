import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs9da2b6b.css';
import '../../css/r/rc1e9pbso.css';
import '../../css/j/j_v36pbuz.css';
import '../../css/g/gnte2wbni.css';
import '../../css/c/ch-mh8b7w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 fs9da2b6b"/><path class="clr-i-outline clr-i-outline-path-2 rc1e9pbso"/><path class="clr-i-outline clr-i-outline-path-3 j_v36pbuz"/><path class="clr-i-outline clr-i-outline-path-4 gnte2wbni"/><path class="ch-mh8b7w clr-i-outline clr-i-outline-path-5"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:no-wifi-line",
	});
}

export default Component;
