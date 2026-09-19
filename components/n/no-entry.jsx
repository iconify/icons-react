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
		"content": `<style>.e5xzwot2c {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 26h46v12H9z");
}

.qm7pesb5s {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ff5a79, #ff5a79);
}
</style><circle class="qm7pesb5s"/><path class="e5xzwot2c"/>`,
		"fallback": "emojione:no-entry",
	});
}

export default Component;
