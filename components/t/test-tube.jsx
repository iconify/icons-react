import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/laria4ctv.css';
import '../../css/z/z-z9v84ao.css';
import '../../css/g/goi7h-9jx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh8rQFdVp"><g class="aql7dnt-u"><path class="laria4ctv"/><path clip-rule="evenodd" class="z-z9v84ao"/><path class="goi7h-9jx"/></g></mask></defs><path mask="url(#SVGh8rQFdVp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:test-tube",
	});
}

export default Component;
