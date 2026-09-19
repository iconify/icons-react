import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/o75u-cc0c.css';
import '../../css/e/e9d3hlh5n.css';
import '../../css/v/v-sv08b6n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhrnvfc4U"><g class="rohhhzb0l"><circle class="o75u-cc0c"/><rect transform="rotate(90 36.006 19.334)" class="e9d3hlh5n"/><rect transform="rotate(-180 36.006 29.852)" class="v-sv08b6n"/></g></mask></defs><path mask="url(#SVGhrnvfc4U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:switch-one",
	});
}

export default Component;
