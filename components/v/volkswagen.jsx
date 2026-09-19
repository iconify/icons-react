import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/r/rer8mf95d.css';
import '../../css/m/mdurccb4e.css';
import '../../css/b/b6vpmabbz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzvADPeKr"><g class="rohhhzb0l"><path class="j-v2u4nhg"/><path class="rer8mf95d"/><path class="mdurccb4e"/><path class="b6vpmabbz"/></g></mask></defs><path mask="url(#SVGzvADPeKr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:volkswagen",
	});
}

export default Component;
