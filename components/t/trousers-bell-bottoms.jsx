import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jq_ousbmh.css';
import '../../css/h/htwf0xguy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXyj9GbJf"><g class="aql7dnt-u"><path class="jq_ousbmh"/><path class="htwf0xguy"/></g></mask></defs><path mask="url(#SVGXyj9GbJf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trousers-bell-bottoms",
	});
}

export default Component;
