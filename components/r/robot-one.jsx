import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-nyfmbua.css';
import '../../css/s/s5ic0sbzt.css';
import '../../css/x/x08wk1hjm.css';
import '../../css/k/ka5v9tb1b.css';
import '../../css/g/gu4jepboy.css';
import '../../css/y/y6_ym-bae.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeGGCxbhu"><g class="ft5dv1b6b"><rect class="l-nyfmbua"/><circle class="s5ic0sbzt"/><circle class="x08wk1hjm"/><path class="ka5v9tb1b"/><path class="gu4jepboy"/><circle class="y6_ym-bae"/></g></mask></defs><path mask="url(#SVGeGGCxbhu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:robot-one",
	});
}

export default Component;
