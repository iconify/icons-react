import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mf4kxbb7i.css';
import '../../css/q/qp5l2y6-o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzIoW9KLC"><g class="aql7dnt-u"><path class="mf4kxbb7i"/><circle class="qp5l2y6-o"/></g></mask></defs><path mask="url(#SVGzIoW9KLC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:open-one",
	});
}

export default Component;
