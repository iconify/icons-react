import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-jbwsbtj.css';
import '../../css/k/k1oo7kv7m.css';
import '../../css/m/m-iytloac.css';
import '../../css/b/bwkvv2mxj.css';
import '../../css/f/fvry82veo.css';
import '../../css/g/g1wozeb3h.css';
import '../../css/r/rerecsbpx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-jbwsbtj"/><path class="k1oo7kv7m"/><path class="m-iytloac"/><path class="bwkvv2mxj"/><path class="fvry82veo"/><path class="g1wozeb3h"/><path class="rerecsbpx"/>`,
		"fallback": "ion:ios-partlysunny",
	});
}

export default Component;
