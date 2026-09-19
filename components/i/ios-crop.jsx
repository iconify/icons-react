import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc7fzmsbi.css';
import '../../css/t/t4p58ib0k.css';
import '../../css/g/gv02961wk.css';
import '../../css/a/acfq-db-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc7fzmsbi"/><path class="t4p58ib0k"/><path class="gv02961wk"/><path class="acfq-db-c"/>`,
		"fallback": "ion:ios-crop",
	});
}

export default Component;
