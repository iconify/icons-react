import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mz7ixi_za.css';
import '../../css/p/pw-un3vsd.css';
import '../../css/r/ra3xookan.css';
import '../../css/v/vfsc1-bvx.css';
import '../../css/p/pvcf8klqp.css';
import '../../css/z/zarax3ozk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mz7ixi_za wm-k"/><path class="pw-un3vsd wm-k"/><path class="ra3xookan wm-k"/><path class="vfsc1-bvx wm-s"/><path class="pvcf8klqp wm-s"/><path class="wm-s zarax3ozk"/></g>`,
		"fallback": "withicons-anime:list-minus",
	});
}

export default Component;
