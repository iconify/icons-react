import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kbesibb3g.css';
import '../../css/r/raiutmb2i.css';
import '../../css/x/x2401pk9v.css';
import '../../css/g/g6li1jbuk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGP3yuicip"><g class="rohhhzb0l"><path class="kbesibb3g"/><path class="raiutmb2i"/><circle class="x2401pk9v"/><path class="g6li1jbuk"/></g></mask></defs><path mask="url(#SVGP3yuicip)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:setting-laptop",
	});
}

export default Component;
