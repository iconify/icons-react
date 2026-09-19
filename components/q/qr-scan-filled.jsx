import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvaaipbio.css';
import '../../css/v/vy6884uyz.css';
import '../../css/j/jjrkjtb3x.css';
import '../../css/h/hj6wm5bry.css';
import '../../css/q/quzn65tbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvaaipbio"/><rect class="vy6884uyz"/><rect class="jjrkjtb3x"/><rect class="hj6wm5bry"/><path class="quzn65tbh"/>`,
		"fallback": "boxicons:qr-scan-filled",
	});
}

export default Component;
