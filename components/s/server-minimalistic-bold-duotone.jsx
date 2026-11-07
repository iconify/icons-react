import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgne39bkn.css';
import '../../css/m/mhf9vv20r.css';
import '../../css/v/v3qvc020l.css';
import '../../css/q/qe32f93df.css';
import '../../css/h/hta7xqm4w.css';
import '../../css/l/l9dbtrbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgne39bkn"/><path class="mhf9vv20r"/><path class="v3qvc020l"/><g clip-rule="evenodd" class="qe32f93df"><path class="hta7xqm4w"/><path class="l9dbtrbok"/></g>`,
		"fallback": "solar:server-minimalistic-bold-duotone",
	});
}

export default Component;
