import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f7orvpbwy.css';
import '../../css/i/i9aqj_b9h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGL6k8IccK"><g class="ufeehvblu"><path class="f7orvpbwy"/><path class="i9aqj_b9h"/></g></mask></defs><path mask="url(#SVGL6k8IccK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:platte",
	});
}

export default Component;
