import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d29mtoyfh.css';
import '../../css/q/ql747jj8q.css';
import '../../css/g/gw2pyczoa.css';
import '../../css/l/legp_2b7m.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d29mtoyfh"/><path class="ql747jj8q"/><path class="gw2pyczoa"/><path class="legp_2b7m"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:solar-tracker-alert-20-bold",
	});
}

export default Component;
