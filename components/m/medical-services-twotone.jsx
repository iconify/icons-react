import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/k/k2hxuz.css';
import '../../css/l/li54_l.css';
import '../../css/y/y4wbml.css';
import '../../css/p/p7uddg.css';
import '../../css/r/rrfntd.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-64.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew k2hxuz"/><path class="iw1iew li54_l y4wbml"/><path class="iw1iew p7uddg y4wbml"/><path class="iw1iew rrfntd y4wbml"/>`,
		"fallback": "line-md:medical-services-twotone",
	});
}

export default Component;
