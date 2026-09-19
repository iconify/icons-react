import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj11_sb5g.css';
import '../../css/g/g0irkt0rl.css';
import '../../css/i/ikh3n7nzg.css';
import '../../css/m/mn5jq8ovs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj11_sb5g"/><path class="g0irkt0rl"/><path class="ikh3n7nzg"/><path class="mn5jq8ovs"/>`,
		"fallback": "fxemoji:levelslider",
	});
}

export default Component;
