import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hvqy7zb2s.css';
import '../../css/f/fnvwt9cpi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXs9sYcjz"><g class="ufeehvblu"><path class="hvqy7zb2s"/><path class="fnvwt9cpi"/></g></mask></defs><path mask="url(#SVGXs9sYcjz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tag",
	});
}

export default Component;
