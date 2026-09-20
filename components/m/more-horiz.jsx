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
		"content": `<style>.v10iw94hf {
  fill: currentColor;
  d: path("M6.462 13q-.413 0-.707-.294T5.462 12t.293-.706t.707-.294t.706.294t.293.706t-.293.706T6.46 13M12 13q-.413 0-.706-.294T11 12t.294-.706T12 11t.706.294T13 12t-.294.706T12 13m5.539 0q-.413 0-.707-.294T16.538 12t.294-.706t.706-.294t.707.294t.293.706t-.293.706t-.707.294");
}
</style><path class="v10iw94hf"/>`,
		"fallback": "material-symbols-light:more-horiz",
	});
}

export default Component;
