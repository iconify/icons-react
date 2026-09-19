import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g339p6i6x.css';
import '../../css/e/eisg8_b5u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeRwz2bVG"><g class="aql7dnt-u"><path class="g339p6i6x"/><path class="eisg8_b5u"/></g></mask></defs><path mask="url(#SVGeRwz2bVG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sd",
	});
}

export default Component;
