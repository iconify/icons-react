import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/x98exbccb.css';
import '../../css/f/fs4btdpbi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGms8qbAy"><g class="rohhhzb0l"><path clip-rule="evenodd" class="x98exbccb"/><path class="fs4btdpbi"/></g></mask></defs><path mask="url(#SVGGms8qbAy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:orthopedic",
	});
}

export default Component;
