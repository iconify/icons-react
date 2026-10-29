import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhs4dgblh.css';
import '../../css/x/xgp_bjbeh.css';
import '../../css/a/aqmrw1bwr.css';
import '../../css/k/k4kh0rbsg.css';
import '../../css/o/ogu4vlkot.css';
import '../../css/y/yzwlrvbmj.css';
import '../../css/v/vtl9vs2gh.css';
import '../../css/g/ghntfx_0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow zhs4dgblh"/><path class="wm-k xgp_bjbeh"/><path class="aqmrw1bwr wm-k"/><path class="k4kh0rbsg wm-k"/><path class="ogu4vlkot wm-k"/><path class="wm-k yzwlrvbmj"/><path class="vtl9vs2gh wm-shine"/><path class="ghntfx_0u wm-a"/>`,
		"fallback": "withicons-pastel:octagon-x",
	});
}

export default Component;
