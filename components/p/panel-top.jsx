import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syk1us2fg.css';
import '../../css/o/ob9_5nbbe.css';
import '../../css/g/gth95mb7o.css';
import '../../css/z/zxqj3r0da.css';
import '../../css/h/hff6qok6f.css';
import '../../css/a/agex9k6ym.css';
import '../../css/m/mu3xycbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syk1us2fg wm-shadow"/><path class="ob9_5nbbe wm-k"/><path class="gth95mb7o wm-k"/><path class="wm-k zxqj3r0da"/><path class="hff6qok6f wm-k"/><path class="agex9k6ym wm-k"/><path class="mu3xycbhf wm-shine"/>`,
		"fallback": "withicons-pastel:panel-top",
	});
}

export default Component;
