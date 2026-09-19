import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/yiy1b3n8l.css';
import '../../css/o/o4ouqrbli.css';
import '../../css/c/cczr5i5fa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7BcMAebJ"><g class="rohhhzb0l"><path class="yiy1b3n8l"/><path class="o4ouqrbli"/><circle transform="rotate(-90 13 9)" class="cczr5i5fa"/></g></mask></defs><path mask="url(#SVG7BcMAebJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:u-turn-up",
	});
}

export default Component;
