import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fuz479bot.css';
import '../../css/f/fcp723b9j.css';
import '../../css/q/qefv847_y.css';
import '../../css/g/gwafzf_sr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="fuz479bot"/><path class="fcp723b9j"/><circle class="qefv847_y"/><circle class="gwafzf_sr"/></g>`,
		"fallback": "icon-park-outline:owl",
	});
}

export default Component;
