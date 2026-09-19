import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/n50isoc7j.css';
import '../../css/r/rms-2fbbc.css';
import '../../css/p/p0pjh8bpe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKlL1GfdX"><g class="aql7dnt-u"><path class="n50isoc7j"/><path class="rms-2fbbc"/><path class="p0pjh8bpe"/></g></mask></defs><path mask="url(#SVGKlL1GfdX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:usb-micro-one",
	});
}

export default Component;
