import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/y/yy7ol1bks.css';
import '../../css/e/enoqa7bof.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgedRfbIA"><g class="hv130ab-t"><path class="yy7ol1bks"/><path class="enoqa7bof"/></g></mask></defs><path mask="url(#SVGgedRfbIA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:online-meeting",
	});
}

export default Component;
