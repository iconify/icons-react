import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lsk5ggfzs.css';
import '../../css/l/l23-6lzft.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIgrD9mmM"><g class="aql7dnt-u"><path clip-rule="evenodd" class="lsk5ggfzs"/><path class="l23-6lzft"/></g></mask></defs><path mask="url(#SVGIgrD9mmM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:water-rate-two",
	});
}

export default Component;
