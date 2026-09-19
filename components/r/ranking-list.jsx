import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/cyqjerbjs.css';
import '../../css/b/bztzw5bin.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnDF6vd6S"><g class="s9cl3zbei"><path class="cyqjerbjs"/><path class="bztzw5bin"/></g></mask></defs><path mask="url(#SVGnDF6vd6S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ranking-list",
	});
}

export default Component;
