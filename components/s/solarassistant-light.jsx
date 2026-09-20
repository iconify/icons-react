import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd2317bpb.css';
import '../../css/j/j2_dkcu_s.css';
import '../../css/r/ri_kzvb7p.css';
import '../../css/b/bdr85wbvd.css';
import '../../css/j/jzaw16b-k.css';
import '../../css/v/vlblsvc5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd2317bpb"/><path class="j2_dkcu_s"/><path class="ri_kzvb7p"/><path class="bdr85wbvd"/><path class="jzaw16b-k"/><path class="vlblsvc5u"/>`,
		"fallback": "selfhst:solarassistant-light",
	});
}

export default Component;
