import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a9feyacll.css';
import '../../css/t/t93dzlbjh.css';
import '../../css/o/o6f548blr.css';
import '../../css/m/mmo-88bcm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTowT8d6U"><g class="rohhhzb0l"><path class="a9feyacll"/><path class="t93dzlbjh"/><path class="o6f548blr"/><circle class="mmo-88bcm"/></g></mask></defs><path mask="url(#SVGTowT8d6U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:no-shooting",
	});
}

export default Component;
