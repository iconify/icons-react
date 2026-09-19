import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wo_zr_q_a.css';
import '../../css/s/szey3hb9c.css';
import '../../css/h/hnkarubbw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsQCnLy1J"><g class="rohhhzb0l"><path class="wo_zr_q_a"/><path class="szey3hb9c"/><circle class="hnkarubbw"/></g></mask></defs><path mask="url(#SVGsQCnLy1J)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:s-turn-down",
	});
}

export default Component;
