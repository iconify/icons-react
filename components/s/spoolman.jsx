import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw8972b9d.css';
import '../../css/p/pxzoqyb-w.css';
import '../../css/s/skcmeg75t.css';
import '../../css/u/u_acmivgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="jw8972b9d"/><path vector-effect="non-scaling-stroke" class="pxzoqyb-w"/><path class="skcmeg75t"/><path class="u_acmivgm"/>`,
		"fallback": "selfhst:spoolman",
	});
}

export default Component;
