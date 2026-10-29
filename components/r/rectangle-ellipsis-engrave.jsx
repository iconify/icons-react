import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/irdladc7r.css';
import '../../css/l/l6l1smxsb.css';
import '../../css/x/xw_me4vft.css';
import '../../css/g/g2qaiez3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="irdladc7r wm-k"/><path class="l6l1smxsb wm-shadow"/><path class="wm-k xw_me4vft"/><path class="g2qaiez3p wm-a"/></g>`,
		"fallback": "withicons:rectangle-ellipsis-engrave",
	});
}

export default Component;
