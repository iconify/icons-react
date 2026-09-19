import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhvsn3b_z.css';
import '../../css/b/balrlwe9n.css';
import '../../css/j/j9hn2cjzh.css';
import '../../css/k/kit1v6bps.css';
import '../../css/c/c1kqa-utl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGB4FbcxwJ"><g class="ft5dv1b6b"><path class="uhvsn3b_z"/><path class="balrlwe9n"/><circle class="j9hn2cjzh"/><circle class="kit1v6bps"/><path class="c1kqa-utl"/></g></mask></defs><path mask="url(#SVGB4FbcxwJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tabletennis",
	});
}

export default Component;
