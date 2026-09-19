import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xqf-9jbow.css';
import '../../css/j/jh580j15b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRWi0IbuG"><g class="aql7dnt-u"><path class="xqf-9jbow"/><path class="jh580j15b"/></g></mask></defs><path mask="url(#SVGRWi0IbuG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:spa-candle",
	});
}

export default Component;
