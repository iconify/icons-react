import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb1lu2blg.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/umy13yz7p.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGIsKoDbZJ" class="jb1lu2blg"/></defs><g class="n1mjunbsu"><path class="umy13yz7p"/><use href="#SVGIsKoDbZJ"/></g><use href="#SVGIsKoDbZJ" class="ij2x_72vy"/>`,
		"fallback": "openmoji:sake",
	});
}

export default Component;
