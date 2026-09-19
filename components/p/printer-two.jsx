import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xsydfnbew.css';
import '../../css/o/o39sc1brf.css';
import '../../css/f/f5zx67bhh.css';
import '../../css/d/d-jqf1bjs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbg6Xjesu"><g class="rohhhzb0l"><path class="xsydfnbew"/><rect class="o39sc1brf"/><path class="f5zx67bhh"/><path class="d-jqf1bjs"/></g></mask></defs><path mask="url(#SVGbg6Xjesu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:printer-two",
	});
}

export default Component;
