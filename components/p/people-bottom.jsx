import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pzosztbse.css';
import '../../css/o/obvwy2but.css';
import '../../css/y/ylhp4cc8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGonWILd0q"><g class="aql7dnt-u"><path class="pzosztbse"/><path class="obvwy2but"/><path class="ylhp4cc8g"/></g></mask></defs><path mask="url(#SVGonWILd0q)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-bottom",
	});
}

export default Component;
