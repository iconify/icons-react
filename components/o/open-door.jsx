import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nvxkylbdg.css';
import '../../css/y/yyx_3z7mv.css';
import '../../css/c/c6nrszujt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuSC5DboZ"><g class="v3_i3wktz"><path class="nvxkylbdg"/><path clip-rule="evenodd" class="yyx_3z7mv"/><path class="c6nrszujt"/></g></mask></defs><path mask="url(#SVGuSC5DboZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:open-door",
	});
}

export default Component;
