import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcj4nbc5p.css';
import '../../css/l/lbcq76bkt.css';
import '../../css/m/m1nz26bvi.css';
import '../../css/z/zsfrxacyh.css';
import '../../css/i/i_8xh4n4w.css';
import '../../css/o/ovmlhq_gh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcj4nbc5p"/><path class="lbcq76bkt"/><path class="m1nz26bvi"/><path class="zsfrxacyh"/><path class="i_8xh4n4w"/><path class="ovmlhq_gh"/></g>`,
		"fallback": "fluent-emoji-flat:tennis",
	});
}

export default Component;
