import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/b63-x3a4s.css';
import '../../css/s/s1dm0hsyw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKExxydxk"><g class="rohhhzb0l"><rect class="b63-x3a4s"/><path class="s1dm0hsyw"/></g></mask></defs><path mask="url(#SVGKExxydxk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:iwatch-one",
	});
}

export default Component;
