import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g3-owbu_s.css';
import '../../css/h/hyf600jeo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2fyF0bGG"><g class="aql7dnt-u"><path class="g3-owbu_s"/><path class="hyf600jeo"/></g></mask></defs><path mask="url(#SVG2fyF0bGG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rectangle-tear",
	});
}

export default Component;
