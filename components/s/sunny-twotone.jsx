import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/u/uib4oa.css';
import '../../css/b/bnlosc.css';
import '../../css/y/y4wbml.css';
import '../../css/p/pcbmhn.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew uib4oa"/><path class="bnlosc iw1iew y4wbml"/><path class="iw1iew pcbmhn y4wbml"/>`,
		"fallback": "line-md:sunny-twotone",
	});
}

export default Component;
