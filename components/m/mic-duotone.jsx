import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyqotpbcg.css';
import '../../css/a/aqfpmgb6v.css';
import '../../css/g/ghb7ubbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lyqotpbcg"><rect class="aqfpmgb6v"/><path class="ghb7ubbkf"/></g>`,
		"fallback": "lets-icons:mic-duotone",
	});
}

export default Component;
