import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p_lhn1bcu.css';
import '../../css/i/iyyirubqr.css';
import '../../css/g/g3kkxobsr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGen6H1bAc"><g class="wwvp95byt"><rect class="p_lhn1bcu"/><path class="iyyirubqr"/><path class="g3kkxobsr"/></g></mask></defs><path mask="url(#SVGen6H1bAc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:trunk",
	});
}

export default Component;
