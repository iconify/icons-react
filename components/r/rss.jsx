import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hvqy7zb2s.css';
import '../../css/c/c5drbra_w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7wUwycJl"><g class="ufeehvblu"><path class="hvqy7zb2s"/><path class="c5drbra_w"/></g></mask></defs><path mask="url(#SVG7wUwycJl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:rss",
	});
}

export default Component;
