import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xpr8lkjuj.css';
import '../../css/y/yqxucbc0n.css';
import '../../css/m/m4wir9t-b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2c9QNd4P"><g class="rohhhzb0l"><path class="xpr8lkjuj"/><path class="yqxucbc0n"/><path class="m4wir9t-b"/></g></mask></defs><path mask="url(#SVG2c9QNd4P)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:volume-notice",
	});
}

export default Component;
