import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-4_v9njk.css';
import '../../css/d/dw2j3ebeq.css';
import '../../css/s/st1ujobif.css';
import '../../css/r/r25huvknw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-4_v9njk"/><path class="dw2j3ebeq"/><path class="st1ujobif"/><path class="r25huvknw"/>`,
		"fallback": "selfhst:openshift",
	});
}

export default Component;
