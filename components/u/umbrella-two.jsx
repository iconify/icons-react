import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tmv9f3ave.css';
import '../../css/a/alsexi7xx.css';
import '../../css/h/hdbq3cbgp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIQF2UvjP"><g class="aql7dnt-u"><path class="tmv9f3ave"/><path class="alsexi7xx"/><path class="hdbq3cbgp"/></g></mask></defs><path mask="url(#SVGIQF2UvjP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:umbrella-two",
	});
}

export default Component;
