import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9nlq4bmh.css';
import '../../css/e/eg53tfboc.css';
import '../../css/p/pvwubie-t.css';
import '../../css/f/furrw-3gr.css';
import '../../css/q/qxqpfx-pk.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/a/aulgmrb2s.css';
import '../../css/s/swupebb1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9nlq4bmh"/><circle class="eg53tfboc"/><path class="pvwubie-t"/><path class="furrw-3gr"/><circle class="qxqpfx-pk"/><g class="n1mjunbsu"><path class="aulgmrb2s"/><path class="swupebb1c"/></g>`,
		"fallback": "flat-color-icons:remove-image",
	});
}

export default Component;
