import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gyuogtbyx.css';
import '../../css/r/re1bqhb2q.css';
import '../../css/s/sgoo-oy7b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGs3A8LbuO"><g class="aql7dnt-u"><path class="gyuogtbyx"/><circle class="re1bqhb2q"/><path class="sgoo-oy7b"/></g></mask></defs><path mask="url(#SVGs3A8LbuO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:open-an-account",
	});
}

export default Component;
