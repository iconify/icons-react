import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bw4ja6b0h.css';
import '../../css/a/aiajx7ljo.css';
import '../../css/b/b0___p7qg.css';
import '../../css/r/rle50jbed.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV3aj1d2i"><g class="v3_i3wktz"><path class="bw4ja6b0h"/><path class="aiajx7ljo"/><path class="b0___p7qg"/><path class="rle50jbed"/></g></mask></defs><path mask="url(#SVGV3aj1d2i)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stock-market",
	});
}

export default Component;
