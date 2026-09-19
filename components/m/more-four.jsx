import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8-c1m0ua.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1RrlacnE"><path class="k8-c1m0ua"/></mask></defs><path mask="url(#SVG1RrlacnE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:more-four",
	});
}

export default Component;
