import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhai-vmmb.css';
import '../../css/q/q3uobhc3c.css';
import '../../css/n/nd-_p_a3p.css';
import '../../css/v/v03hwspvx.css';
import '../../css/f/fzk14abag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhai-vmmb"/><path class="q3uobhc3c"/><circle class="nd-_p_a3p"/><circle class="v03hwspvx"/><circle class="fzk14abag"/>`,
		"fallback": "material-icon-theme:jest",
	});
}

export default Component;
