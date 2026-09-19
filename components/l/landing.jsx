import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qt1es7b7z.css';
import '../../css/l/l_tp72bqp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEr0T1crA"><g class="aql7dnt-u"><path class="qt1es7b7z"/><path class="l_tp72bqp"/></g></mask></defs><path mask="url(#SVGEr0T1crA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:landing",
	});
}

export default Component;
