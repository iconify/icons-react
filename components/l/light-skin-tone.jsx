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
		"content": `<style>.o6fhpyk-a {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffe1bd, #ffe1bd);
}
</style><circle class="o6fhpyk-a"/>`,
		"fallback": "emojione:light-skin-tone",
	});
}

export default Component;
