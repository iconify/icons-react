import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ouv68p9fq.css';
import '../../css/a/a4t4jwbbp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfklC0HOU"><g class="aql7dnt-u"><path class="ouv68p9fq"/><path class="a4t4jwbbp"/></g></mask></defs><path mask="url(#SVGfklC0HOU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nurse-cap",
	});
}

export default Component;
