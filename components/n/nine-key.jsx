import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/m/mq16e8bmh.css';
import '../../css/m/m3hasrx1m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWycvjbPh"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="mq16e8bmh"/><path class="m3hasrx1m"/></g></mask></defs><path mask="url(#SVGWycvjbPh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nine-key",
	});
}

export default Component;
