import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4369xzyz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdfUibcAN"><path class="u4369xzyz"/></mask></defs><path mask="url(#SVGdfUibcAN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:point",
	});
}

export default Component;
