import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ikbleibbz.css';
import '../../css/u/ue1cjpbqo.css';
import '../../css/g/gezz_3bzh.css';
import '../../css/t/tj3yjmbcb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwU05VcwY"><g class="aql7dnt-u"><circle class="ikbleibbz"/><path class="ue1cjpbqo"/><path class="gezz_3bzh"/><path class="tj3yjmbcb"/></g></mask></defs><path mask="url(#SVGwU05VcwY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:personal-privacy",
	});
}

export default Component;
