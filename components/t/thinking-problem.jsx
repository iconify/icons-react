import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mwtu4sbam.css';
import '../../css/j/jer63kble.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNFCkdb9e"><g class="wwvp95byt"><path class="mwtu4sbam"/><path class="jer63kble"/></g></mask></defs><path mask="url(#SVGNFCkdb9e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:thinking-problem",
	});
}

export default Component;
