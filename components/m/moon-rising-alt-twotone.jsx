import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8e22g.css';
import '../../css/w/wh59vr.css';
import '../../css/b/b1urau.css';
import '../../css/u/ubmjts.css';
import '../../css/e/eyuyvm.css';
import '../../css/b/bmy0qq.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8e22g wh59vr"/><path class="b1urau s8e22g ubmjts"/><path class="b1urau eyuyvm s8e22g"/><path class="b1urau bmy0qq s8e22g"/>`,
		"fallback": "line-md:moon-rising-alt-twotone",
	});
}

export default Component;
