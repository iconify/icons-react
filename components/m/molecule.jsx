import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l606hpblz.css';
import '../../css/a/a94083zmd.css';
import '../../css/s/s7qlots-e.css';
import '../../css/c/c64rx-oed.css';
import '../../css/q/qf4kd3bgi.css';
import '../../css/t/tr57f1brb.css';
import '../../css/h/hubiu8bwb.css';
import '../../css/g/gv68en5bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="l606hpblz"/><path class="a94083zmd"/><circle class="s7qlots-e"/><path class="c64rx-oed"/><circle class="qf4kd3bgi"/><path class="tr57f1brb"/><circle class="hubiu8bwb"/><circle class="gv68en5bf"/></g>`,
		"fallback": "lets-icons:molecule",
	});
}

export default Component;
