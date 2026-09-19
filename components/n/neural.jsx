import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/yhb1cqbqy.css';
import '../../css/c/c89k9zb1v.css';
import '../../css/d/d-bufxb7a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfJxM3bcw"><g class="rohhhzb0l"><path clip-rule="evenodd" class="yhb1cqbqy"/><path class="c89k9zb1v"/><path class="d-bufxb7a"/></g></mask></defs><path mask="url(#SVGfJxM3bcw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:neural",
	});
}

export default Component;
