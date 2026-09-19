import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/b2x-c-bwn.css';
import '../../css/a/aanf44whq.css';
import '../../css/d/dcd8x3bjh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzmZ6hexT"><g class="ufeehvblu"><path class="b2x-c-bwn"/><path class="aanf44whq"/><path class="dcd8x3bjh"/></g></mask></defs><path mask="url(#SVGzmZ6hexT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:log",
	});
}

export default Component;
