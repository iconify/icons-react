import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbqbzqb3e.css';
import '../../css/g/gi8vxz4jo.css';
import '../../css/s/s2mrzdw6u.css';
import '../../css/u/us2wgibly.css';
import '../../css/k/k5qbcdbsg.css';
import '../../css/c/cqp-znbdp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbqbzqb3e"/><path class="gi8vxz4jo"/><path class="s2mrzdw6u"/><path class="us2wgibly"/><path class="k5qbcdbsg"/><path class="cqp-znbdp"/>`,
		"fallback": "devicon:raspberrypi-wordmark",
	});
}

export default Component;
