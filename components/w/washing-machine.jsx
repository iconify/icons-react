import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzvogwsua.css';
import '../../css/p/pubvu5g2l.css';
import '../../css/x/xtoqjuvtp.css';
import '../../css/r/rkiddqluw.css';
import '../../css/s/syk7mps5y.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdUj5Lepg"><g class="ft5dv1b6b"><rect class="xzvogwsua"/><path class="pubvu5g2l"/><circle class="xtoqjuvtp"/><circle class="rkiddqluw"/><circle class="syk7mps5y"/></g></mask></defs><path mask="url(#SVGdUj5Lepg)" class="maw6_-12u"/>`,
		"fallback": "icon-park-twotone:washing-machine",
	});
}

export default Component;
