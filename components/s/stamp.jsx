import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/i/i--o-zb7z.css';
import '../../css/f/f6c0wnbzz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0gbQfepc"><g class="adexpl72i"><path class="i--o-zb7z"/><circle class="f6c0wnbzz"/></g></mask></defs><path mask="url(#SVG0gbQfepc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stamp",
	});
}

export default Component;
