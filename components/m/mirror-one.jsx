import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/sfltb2brf.css';
import '../../css/a/a10evxbfq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIiREeetT"><g class="rohhhzb0l"><circle class="sfltb2brf"/><path class="a10evxbfq"/></g></mask></defs><path mask="url(#SVGIiREeetT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mirror-one",
	});
}

export default Component;
