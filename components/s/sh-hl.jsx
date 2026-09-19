import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/r/rcsln0q1b.css';
import '../../css/d/dyrp3tsfw.css';
import '../../css/m/m025eu5-n.css';
import '../../css/n/nwmql1bgr.css';
import '../../css/n/n609cdcey.css';
import '../../css/s/s5av8bcey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="rcsln0q1b"/><path class="dyrp3tsfw"/><path class="m025eu5-n"/><path class="nwmql1bgr"/><path class="n609cdcey"/><path class="s5av8bcey"/></g>`,
		"fallback": "circle-flags:sh-hl",
	});
}

export default Component;
