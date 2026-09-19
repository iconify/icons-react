import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kq-ex-9vh.css';
import '../../css/o/owyx67boc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEtuFMe3c"><g class="rohhhzb0l"><path class="kq-ex-9vh"/><path class="owyx67boc"/></g></mask></defs><path mask="url(#SVGEtuFMe3c)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:swimming-ring",
	});
}

export default Component;
