import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9hcsnbsy.css';
import '../../css/k/kls3_nbwn.css';
import '../../css/u/ut31g4brz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnrGa7bhS"><g class="aql7dnt-u"><path class="h9hcsnbsy"/><path class="kls3_nbwn"/><path class="ut31g4brz"/></g></mask></defs><path mask="url(#SVGnrGa7bhS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tent-banner",
	});
}

export default Component;
