import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bveiwfbhu.css';
import '../../css/m/mh2g8ibox.css';
import '../../css/l/lwow3knzh.css';
import '../../css/a/a-eppqbrl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bveiwfbhu"/><path class="mh2g8ibox"/><path class="lwow3knzh"/><path class="a-eppqbrl"/>`,
		"fallback": "streamline-pixel:travel-wayfinding-beach-umbrella",
	});
}

export default Component;
