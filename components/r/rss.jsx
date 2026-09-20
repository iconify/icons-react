import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6k0um.css';
import '../../css/a/a0m25c.css';
import '../../css/d/d1r5_v.css';
import '../../css/d/dk_amu.css';
import '../../css/r/r-from-0px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x6k0um"/><path class="a0m25c d1r5_v"/><path class="a0m25c dk_amu"/>`,
		"fallback": "line-md:rss",
	});
}

export default Component;
