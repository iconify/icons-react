import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmi5l9bju.css';
import '../../css/h/hbd-r_bdq.css';
import '../../css/n/n2v3wgbmd.css';
import '../../css/v/v571wkxlx.css';
import '../../css/j/jfco_8x9q.css';
import '../../css/h/hbakpg7fr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 kmi5l9bju"/><path class="clr-i-outline clr-i-outline-path-2 hbd-r_bdq"/><path class="clr-i-outline clr-i-outline-path-3 n2v3wgbmd"/><path class="clr-i-outline clr-i-outline-path-4 v571wkxlx"/><path class="clr-i-outline clr-i-outline-path-5 jfco_8x9q"/><path class="clr-i-outline clr-i-outline-path-6 hbakpg7fr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:table-line",
	});
}

export default Component;
