import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vl47czbvy.css';
import '../../css/p/p3d6x4bxq.css';
import '../../css/o/osg-w3iku.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFUfPSd3B"><g class="s9cl3zbei"><rect class="vl47czbvy"/><path class="p3d6x4bxq"/><rect class="osg-w3iku"/></g></mask></defs><path mask="url(#SVGFUfPSd3B)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:seo",
	});
}

export default Component;
