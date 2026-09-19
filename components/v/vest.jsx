import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfqc5hbns.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPo9Qqccj"><path class="nfqc5hbns"/></mask></defs><path mask="url(#SVGPo9Qqccj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vest",
	});
}

export default Component;
