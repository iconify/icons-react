import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/i/ijzot5blw.css';
import '../../css/i/ilfmvncty.css';
import '../../css/s/swg6q8buh.css';
import '../../css/n/ngp5n-n4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="ijzot5blw"/><path class="ilfmvncty"/><path class="swg6q8buh"/><path class="ngp5n-n4e"/>`,
		"fallback": "solar:quit-full-screen-square-bold-duotone",
	});
}

export default Component;
