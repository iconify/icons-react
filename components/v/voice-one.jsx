import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/a/af85iwclp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdzeGqd7Z"><g class="rohhhzb0l"><path class="j-v2u4nhg"/><path class="af85iwclp"/></g></mask></defs><path mask="url(#SVGdzeGqd7Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:voice-one",
	});
}

export default Component;
