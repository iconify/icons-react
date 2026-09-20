import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwv0-yjpp.css';
import '../../css/k/kcj8csbsj.css';
import '../../css/r/rdkju9bnm.css';
import '../../css/k/k4o8spb4u.css';
import '../../css/i/ioe6w5bfu.css';
import '../../css/d/d8eyz0blj.css';
import '../../css/a/af2lslb-b.css';
import '../../css/x/x2ecoezia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwv0-yjpp"/><path class="kcj8csbsj"/><path class="rdkju9bnm"/><path class="k4o8spb4u"/><path class="ioe6w5bfu"/><path class="d8eyz0blj"/><path class="af2lslb-b"/><path class="x2ecoezia"/>`,
		"fallback": "token:mnr",
	});
}

export default Component;
