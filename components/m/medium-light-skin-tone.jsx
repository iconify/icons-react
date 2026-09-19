import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s-t8usfrs {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--fed0ac, #fed0ac);
}
</style><circle class="s-t8usfrs"/>`,
		"fallback": "emojione:medium-light-skin-tone",
	});
}

export default Component;
