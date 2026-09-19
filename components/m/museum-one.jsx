import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/l/luvq4b0xv.css';
import '../../css/h/hx_9wvu-g.css';
import '../../css/v/v6juoxv0n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG80yFNcrB"><g class="rohhhzb0l"><path class="ii0wlebwq"/><path class="luvq4b0xv"/><path class="hx_9wvu-g"/><path class="v6juoxv0n"/></g></mask></defs><path mask="url(#SVG80yFNcrB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:museum-one",
	});
}

export default Component;
