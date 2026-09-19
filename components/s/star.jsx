import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj8gq3bcg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTuN6OeRa"><path class="jj8gq3bcg"/></mask></defs><path mask="url(#SVGTuN6OeRa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:star",
	});
}

export default Component;
