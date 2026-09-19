import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r4eb564mb.css';
import '../../css/c/cnqjeub1v.css';
import '../../css/n/njoak0bdt.css';
import '../../css/o/o0s89pb0p.css';
import '../../css/x/xb8_cbr0c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGK5HqqcwK"><g class="rohhhzb0l"><path class="r4eb564mb"/><path class="cnqjeub1v"/><path class="njoak0bdt"/><circle transform="rotate(45 26.041 22.042)" class="o0s89pb0p"/><path class="xb8_cbr0c"/></g></mask></defs><path mask="url(#SVGK5HqqcwK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:microscope-one",
	});
}

export default Component;
