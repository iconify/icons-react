import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3cd7ibxu.css';
import '../../css/p/pz9k4djmg.css';
import '../../css/v/v9x3yzuus.css';
import '../../css/q/qipz36fvw.css';
import '../../css/e/e555xqbrx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3cd7ibxu"/><path class="pz9k4djmg"/><path class="v9x3yzuus"/><path class="qipz36fvw"/><path class="e555xqbrx"/>`,
		"fallback": "streamline-emojis:sparkling-heart",
	});
}

export default Component;
