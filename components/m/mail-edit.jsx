import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/x/xdv566bnw.css';
import '../../css/z/z78yszbru.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbAHd9bYg"><g class="aql7dnt-u"><path class="qtgswnn4u"/><path class="xdv566bnw"/><path class="z78yszbru"/></g></mask></defs><path mask="url(#SVGbAHd9bYg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mail-edit",
	});
}

export default Component;
