import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/orh3r4b-h.css';
import '../../css/t/tskwdnsgg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdNrxObko"><g class="rohhhzb0l"><rect class="orh3r4b-h"/><path class="tskwdnsgg"/></g></mask></defs><path mask="url(#SVGdNrxObko)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:plug-one",
	});
}

export default Component;
