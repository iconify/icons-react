import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adzm42zuk.css';
import '../../css/s/s8ope8btg.css';
import '../../css/p/pp0f03bez.css';
import '../../css/q/q8h4qbb9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="adzm42zuk"/><path class="s8ope8btg"/><path class="pp0f03bez"/><path class="q8h4qbb9h"/>`,
		"fallback": "selfhst:nasa",
	});
}

export default Component;
