import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/e/e5spbgbvw.css';
import '../../css/d/dav0ieqlc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQxVk0bOZ"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="e5spbgbvw"/><path class="dav0ieqlc"/></g></mask></defs><path mask="url(#SVGQxVk0bOZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:layout-two",
	});
}

export default Component;
