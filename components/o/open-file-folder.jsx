import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qira8wb1r.css';
import '../../css/f/f9ccaqo6x.css';
import '../../css/u/ucaqn74-o.css';
import '../../css/l/lpjtd1rju.css';
import '../../css/k/kp-3q2bmv.css';
import '../../css/k/kkxr6ozsk.css';
import '../../css/x/xirraxbre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qira8wb1r"/><path class="f9ccaqo6x"/><path class="ucaqn74-o"/><path class="lpjtd1rju"/><path class="kp-3q2bmv"/><path class="kkxr6ozsk"/><path class="xirraxbre"/>`,
		"fallback": "streamline-emojis:open-file-folder",
	});
}

export default Component;
