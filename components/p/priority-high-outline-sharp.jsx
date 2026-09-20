import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.symq3hbge {
  fill: currentColor;
  d: path("M12 18.846q-.413 0-.706-.293T11 17.846t.294-.706t.706-.294t.706.294t.294.706t-.294.707t-.706.293m-.73-3.807V4.154h1.46v10.885z");
}
</style><path class="symq3hbge"/>`,
		"fallback": "material-symbols-light:priority-high-outline-sharp",
	});
}

export default Component;
