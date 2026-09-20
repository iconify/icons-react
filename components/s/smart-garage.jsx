import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7fx23bpd.css';
import '../../css/j/j2hakr1af.css';
import '../../css/a/a6amy2xrm.css';
import '../../css/x/xxewlcc9j.css';
import '../../css/f/f6u9o_bic.css';
import '../../css/z/zvyfj6b0a.css';
import '../../css/i/iu4na9bmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7fx23bpd"/><path class="j2hakr1af"/><path class="a6amy2xrm"/><path class="xxewlcc9j"/><path class="f6u9o_bic"/><path class="zvyfj6b0a"/><circle class="iu4na9bmi"/>`,
		"fallback": "selfhst:smart-garage",
	});
}

export default Component;
