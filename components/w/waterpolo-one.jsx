import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg6cvcmnb.css';
import '../../css/d/du0s7g5af.css';
import '../../css/h/hp7ql_mqx.css';
import '../../css/c/ceh2c5b0d.css';
import '../../css/d/dwojqqmjw.css';
import '../../css/b/bu4alobho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lg6cvcmnb"/><path class="du0s7g5af"/><path class="hp7ql_mqx"/><path class="ceh2c5b0d"/><path class="dwojqqmjw"/><path class="bu4alobho"/></g>`,
		"fallback": "icon-park:waterpolo-one",
	});
}

export default Component;
