import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3y3kybxd.css';
import '../../css/t/tn7efs79w.css';
import '../../css/h/ha95s7gnr.css';
import '../../css/f/fmrf2gbli.css';
import '../../css/q/q-282bbch.css';
import '../../css/y/y01xkg3vz.css';
import '../../css/f/fi5r7hygn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3y3kybxd"/><path class="tn7efs79w"/><path class="ha95s7gnr"/><path class="fmrf2gbli"/><path class="q-282bbch"/><path class="y01xkg3vz"/><path class="fi5r7hygn"/>`,
		"fallback": "fxemoji:snowmanwithoutsnow",
	});
}

export default Component;
