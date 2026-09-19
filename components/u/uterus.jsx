import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qws8iehrp.css';
import '../../css/c/c3fqsnlyc.css';
import '../../css/d/dgjqt8bah.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD9q9z6PL"><g class="rohhhzb0l"><path class="qws8iehrp"/><path class="c3fqsnlyc"/><path class="dgjqt8bah"/></g></mask></defs><path mask="url(#SVGD9q9z6PL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:uterus",
	});
}

export default Component;
