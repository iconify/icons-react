import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/b/bdnk3hued.css';
import '../../css/g/gzi1ffbys.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKXDeYdWA"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="bdnk3hued"/><path class="gzi1ffbys"/></g></mask></defs><path mask="url(#SVGKXDeYdWA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:six-key",
	});
}

export default Component;
