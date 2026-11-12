import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogbh2qo3x.css';
import '../../css/r/rr_pm1b7q.css';
import '../../css/u/ucafw4brw.css';
import '../../css/m/m11kaybbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogbh2qo3x"/><path class="rr_pm1b7q"/><path class="ucafw4brw"/><path class="m11kaybbv"/>`,
		"fallback": "selfhst:koel",
	});
}

export default Component;
