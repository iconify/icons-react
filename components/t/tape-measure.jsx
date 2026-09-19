import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/onvwtm0bf.css';
import '../../css/e/exaospbay.css';
import '../../css/t/t_en-3qpu.css';
import '../../css/b/bukp5cceq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1b22Bedm"><g class="rohhhzb0l"><path class="onvwtm0bf"/><path class="exaospbay"/><circle class="t_en-3qpu"/><path class="bukp5cceq"/></g></mask></defs><path mask="url(#SVG1b22Bedm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tape-measure",
	});
}

export default Component;
