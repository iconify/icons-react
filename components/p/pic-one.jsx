import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pbruvwbic.css';
import '../../css/b/b064tu1ws.css';
import '../../css/n/n9vszdu4b.css';
import '../../css/s/sc_fqnbin.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGB8BmydBS"><g class="rohhhzb0l"><circle class="pbruvwbic"/><path class="b064tu1ws"/><circle class="n9vszdu4b"/><path class="sc_fqnbin"/></g></mask></defs><path mask="url(#SVGB8BmydBS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pic-one",
	});
}

export default Component;
