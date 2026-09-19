import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unmzjbbfs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMifv1brb"><path class="unmzjbbfs"/></mask></defs><path mask="url(#SVGMifv1brb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:three-three",
	});
}

export default Component;
