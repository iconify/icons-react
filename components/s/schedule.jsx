import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/z/zbz6fmbfq.css';
import '../../css/p/pt3ta8bfq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGS7p27dQv"><g class="hv130ab-t"><rect class="zbz6fmbfq"/><path class="pt3ta8bfq"/></g></mask></defs><path mask="url(#SVGS7p27dQv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:schedule",
	});
}

export default Component;
