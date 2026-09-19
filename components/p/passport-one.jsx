import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a83-n7b5d.css';
import '../../css/r/rp7_zebgd.css';
import '../../css/l/lnl1wm-up.css';
import '../../css/d/dgogtjsii.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGB2Ja9bgT"><g class="rohhhzb0l"><path class="a83-n7b5d"/><rect transform="rotate(-90 13 44)" class="rp7_zebgd"/><circle class="lnl1wm-up"/><path class="dgogtjsii"/></g></mask></defs><path mask="url(#SVGB2Ja9bgT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:passport-one",
	});
}

export default Component;
