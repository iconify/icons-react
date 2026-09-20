import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq_tx75se.css';
import '../../css/q/qo9agdbov.css';
import '../../css/r/r-ll81b-u.css';
import '../../css/r/rk8y4oblx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq_tx75se"/><path class="qo9agdbov"/><path class="r-ll81b-u"/><path class="rk8y4oblx"/>`,
		"fallback": "streamline-emojis:paw-prints",
	});
}

export default Component;
