import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at07s5byk.css';
import '../../css/n/n3ikn2b4s.css';
import '../../css/b/b_3oa7bkg.css';
import '../../css/d/d5y5ipbmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at07s5byk"/><circle class="n3ikn2b4s"/><path class="b_3oa7bkg"/><path class="d5y5ipbmz"/>`,
		"fallback": "fxemoji:koreaflag",
	});
}

export default Component;
