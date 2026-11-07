import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo8-9cb-i.css';
import '../../css/q/qsc1wcf4m.css';
import '../../css/b/bhj2g24rh.css';
import '../../css/b/bau2vbc2j.css';
import '../../css/d/dszgb7nxa.css';
import '../../css/h/h0cp9fbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo8-9cb-i"/><path class="qsc1wcf4m"/><path class="bhj2g24rh"/><path class="bau2vbc2j"/><path class="dszgb7nxa"/><path class="h0cp9fbad"/>`,
		"fallback": "solar:sleeping-circle-bold-duotone",
	});
}

export default Component;
