import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g59f1g7jv.css';
import '../../css/w/w4a4yjboa.css';
import '../../css/b/b5vz60bpb.css';
import '../../css/b/b6ibb-ljq.css';
import '../../css/n/nqsk440ob.css';
import '../../css/w/whn1con8s.css';
import '../../css/h/hzdh4jbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="g59f1g7jv wm-deco"/><path class="w4a4yjboa wm-deco"/><path class="b5vz60bpb wm-deco"/><path class="b6ibb-ljq wm-k"/><path class="nqsk440ob wm-a"/><path class="whn1con8s wm-k"/><path class="hzdh4jbgw wm-a"/></g>`,
		"fallback": "withicons:log-out-blueprint",
	});
}

export default Component;
